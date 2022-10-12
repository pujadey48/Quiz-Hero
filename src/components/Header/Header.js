import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-warning fw-bold" href="/">
            {/* <img
              src="quiz.jpg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
            Quiz Hero
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stats">
                Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
