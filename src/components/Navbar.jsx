import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaHome, FaSearch, FaMobile, FaLaptop, FaTablet, FaFilter } from "react-icons/fa";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };
  
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(  `/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <header className="sticky-top">
      <div className="nav-bar" style={{
        background: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)',
        padding: '1rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <div className="container d-flex justify-content-between align-items-center">
          <Link to={'/'} className="brand d-flex align-items-center text-decoration-none">
            <div className='mx-2 hover-scale'>
              <FaHome size={28} className="text-white" />
            </div>
            <div className='hover-scale fs-4 text-white fw-bold ms-2'>E-Cart</div>
          </Link>

          <form onSubmit={handleSubmit} className="search-bar position-relative mx-4 flex-grow-1" style={{ maxWidth: '600px' }}>
            <div className="input-group">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="form-control search-input"
                placeholder="Search Products..."
                style={{
                  borderRadius: "30px",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  fontSize: '1rem'
                }}
              />
              <button 
                type="submit" 
                className="btn position-absolute end-0 top-50 translate-middle-y me-2"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  padding: '0',
                  backgroundColor: 'rgba(0,0,0,0.1)'
                }}
              >
                <FaSearch className="text-white" />
              </button>
            </div>
          </form>

          <Link to={"/cart"} className="cart-icon-wrapper">
            <button type="button" className="btn btn-light position-relative rounded-circle p-2 hover-scale">
              <BsFillCartCheckFill size={28} className="text-primary"/>
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger animate__animated animate__fadeIn">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>

      {location.pathname === "/" && (
        <div className="filter-bar py-3" style={{
          background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
        }}>
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button onClick={() => setData(items)} className="filter-btn">
                <FaFilter className="me-2" />All Products
              </button>
              <button onClick={() => filterByCategory("mobiles")} className="filter-btn">
                <FaMobile className="me-2" />Mobiles
              </button>
              <button onClick={() => filterByCategory("laptops")} className="filter-btn">
                <FaLaptop className="me-2" />Laptops
              </button>
              <button onClick={() => filterByCategory("tablets")} className="filter-btn">
                <FaTablet className="me-2" />Tablets
              </button>
              <button onClick={() => filterByPrice(29000)} className="filter-btn price-btn">
                ≥₹29,000
              </button>
              <button onClick={() => filterByPrice(49000)} className="filter-btn price-btn">
                ≥₹49,000
              </button>
              <button onClick={() => filterByPrice(69000)} className="filter-btn price-btn">
                ≥₹69,000
              </button>
              <button onClick={() => filterByPrice(89000)} className="filter-btn price-btn">
                ≥₹89,000
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;