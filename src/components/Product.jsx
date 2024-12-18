import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      const obj = { id, price, title, description, imgSrc, quantity: 1 };
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
        <div className="row g-4 justify-content-center">
          {items.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow hover-scale" style={{ borderRadius: "12px" }}>
                <Link to={`/product/${product.id}`} className="bg-light">
                  <div style={{ height: "260px", padding: "1rem" }} className="d-flex align-items-center justify-content-center">
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </Link>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate mb-2">{product.title}</h5>
                  <p className="card-text small text-muted mb-3" style={{
                    height: "3em",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical"
                  }}>
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="mb-3 text-primary">₹{parseInt(product.price).toLocaleString()}</h4>
                    <button
                      onClick={() => addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )}
                      className="btn btn-warning w-100"
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

export default Product;