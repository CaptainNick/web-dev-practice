import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            IA Employees
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">
                  List
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className = "btn btn-outline-light" exact to="/users/add">Add Employee</Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
