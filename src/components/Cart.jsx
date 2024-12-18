import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa"; // Import icons

const Cart = ({ cart, setCart }) => {
  const totalPrice = useMemo(() => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  return (
    <>
      <div className="container" style={{ maxWidth: '900px', margin: '2rem auto' }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Your cart is empty</h1>
            <Link to={'/'} className="btn btn-warning">Continue Shopping...</Link>
          </div>
        ) : (
          <>
            <div className="alert alert-info mb-4">
              <h4 className="text-center mb-0">
                Total Price: ₹{totalPrice.toLocaleString()}
              </h4>
            </div>
            
            <div className="d-flex flex-column align-items-center">
              {cart.map((product) => (
                <div key={product.id} className="card mb-3 position-relative" style={{ width: "100%" }}>
                  <button 
                    onClick={() => removeFromCart(product.id)}
                    className="btn btn-danger position-absolute top-0 end-0 m-2 p-1"
                    style={{ borderRadius: '50%' }}
                  >
                    <FaTimes />
                  </button>
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded"
                        alt={product.title}
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center d-flex flex-column justify-content-center h-100">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                          <button onClick={() => decreaseQuantity(product.id)} className="btn btn-outline-secondary mx-2">
                            <FaMinus />
                          </button>
                          <span className="mx-2">{product.quantity}</span>
                          <button onClick={() => increaseQuantity(product.id)} className="btn btn-outline-secondary mx-2">
                            <FaPlus />
                          </button>
                        </div>
                        <div>
                          <button className="btn btn-primary mx-3">
                            ₹ {parseInt(product.price * product.quantity).toLocaleString()}
                          </button>
                          <button className="btn btn-warning">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-warning">CheckOut</button>
              <button onClick={() => setCart([])} className="btn btn-danger">Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;