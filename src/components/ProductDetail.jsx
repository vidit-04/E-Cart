import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { items } from "./Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category && p.id !== product.id
    );

    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const obj = {
        id,
        price,
        title,
        description,
        imgSrc,
        quantity: 1,
      };
      setCart([...cart, obj]);
    }
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="product-image-container shadow-sm" style={{ borderRadius: "15px", overflow: "hidden" }}>
              <img
                src={product.imgSrc}
                alt={product.title}
                className="img-fluid"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-3">{product.title}</h1>
            <p className="text-muted mb-4">{product.description}</p>
            <h2 className="text-primary mb-4">₹{parseInt(product.price).toLocaleString()}</h2>
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.price,
                  product.title,
                  product.description,
                  product.imgSrc
                )
              }
              className="btn btn-warning btn-lg w-100 add-to-cart-btn"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <h2 className="text-center my-5">Related Products</h2>
        <div className="row g-4">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card h-100 shadow-sm hover-scale" style={{ borderRadius: "15px", overflow: "hidden", transition: "transform 0.3s ease" }}>
                <Link to={`/product/${relatedProduct.id}`} className="bg-light">
                  <div style={{ height: "200px", padding: "1rem", backgroundColor: "#f8f9fa" }} className="d-flex align-items-center justify-content-center">
                    <img
                      src={relatedProduct.imgSrc}
                      alt={relatedProduct.title}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        transition: "transform 0.3s ease"
                      }}
                      className="product-image"
                    />
                  </div>
                </Link>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate mb-2">{relatedProduct.title}</h5>
                  <p className="card-text small text-muted mb-3" style={{
                    height: "3em",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical"
                  }}>
                    {relatedProduct.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="mb-3 text-primary">₹{parseInt(relatedProduct.price).toLocaleString()}</h4>
                    <button
                      onClick={() => addToCart(
                        relatedProduct.id,
                        relatedProduct.price,
                        relatedProduct.title,
                        relatedProduct.description,
                        relatedProduct.imgSrc
                      )}
                      className="btn btn-warning w-100 add-to-cart-btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;