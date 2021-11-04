import React from "react";
import { Redirect, useHistory } from "react-router-dom";

function Navigation({ page }) {
  const history = useHistory();

  return (
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" className="navbar-brand">
            MENU
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">
              <a
                style={{
                  color: page === "Home" ? "black" : "white",
                }}
                href="/search"
                className="nav-item nav-link"
              >
                Home
              </a>
              <a
                style={{
                  color: page === "Profile" ? "black" : "white",
                }}
                href="/admin"
                className="nav-item nav-link"
              >
                Profile
              </a>
              {localStorage.getItem("user") === "" ? null : (
                <a
                  style={{
                    color: page === "Add Post" ? "black" : "white",
                  }}
                  href="/addPost"
                  className="nav-item nav-link"
                >
                  Add Post
                </a>
              )}
            </div>
            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  User Account
                </a>
                <div className="dropdown-menu">
                  {/* <div className="dropdown-item">Login</div> */}
                  {localStorage.getItem("user") !== "" ? (
                    <div>
                      <a
                        onClick={() => {
                          localStorage.setItem("user", "");
                          history.push("/login");
                        }}
                        className="dropdown-item"
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                        onClick={() => {
                          //   localStorage.setItem("user", "");
                          history.push("registration");
                        }}
                        className="dropdown-item"
                      >
                        Register
                      </a>
                      <a
                        onClick={() => {
                          //   localStorage.setItem("user", "");
                          history.push("/login");
                        }}
                        className="dropdown-item"
                      >
                        Login
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
  {
    /* Nav Bar End */
  }
}

export default Navigation;
