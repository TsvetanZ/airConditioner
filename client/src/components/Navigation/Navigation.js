import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const Navigation = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  console.log("navigate:", userEmail);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
      <a href="index.html" className="navbar-brand ms-lg-5">
        <h1 className="display-5 m-0 text-primary">
          Air<span className="text-secondary"> Conditioner</span>
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to={"/"} className="nav-item nav-link">
            Home
          </Link>
          <Link to={"/about"} className="nav-item nav-link">
            About
          </Link>
          <Link to={"/service"} className="nav-item nav-link">
            Service
          </Link>
        </div>

        {!isAuthenticated && (
          <div className="navbar-nav ms-auto py-0">
            <Link to={"/login"} className="nav-item nav-link">
              Login
            </Link>
            <Link to={"/register"} className="nav-item nav-link">
              Register
            </Link>
          </div>
        )}

        {isAuthenticated && (
          <div className="navbar-nav ms-auto py-0">
            <p className="nav-item nav-link">{userEmail}</p>
            <Link to={"/create"} className="nav-item nav-link">
              Create
            </Link>
            <Link to={"/service"} className="nav-item nav-link">
              Service
            </Link>
            <Link to={"/logout"} className="nav-item nav-link">
              Logout
            </Link>

            <Link to={"/contact"} className="nav-item nav-link">
              Contact
            </Link>

            <a
              href="tel:+123456789"
              className="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"
            >
              <i className="bi bi-telephone-outbound me-2" />
              +123 456 789
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
