import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo_img_box">
                        <h2>Book Land</h2>
                    </div>
                    <nav className="navber_nav">
                        <Link className="nav_link" to="/">Home</Link>
                        <Link className="nav_link" to="/add">Add Products</Link>
                        <Link className="nav_link" to="/manage">Manage</Link>
                        <Link className="nav_link" to="/showOrder">Orders</Link>
                        <Link className="btn-primary">Login</Link>
                    </nav>
                </div>
            </div>     
    </header>

          <div className="text-center my-5">
              <h2>Search Your Favorite Book</h2>
              <form className="search-box" action="">
                  <input type="text" name="" placeholder="Search..." id=""/><button className="btn-primary">Search</button>
              </form>
          </div>
    </div>
  );
};

export default Header;
