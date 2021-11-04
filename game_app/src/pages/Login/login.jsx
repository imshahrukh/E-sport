import React, { useEffect, useState, useContext } from "react";
import { Member } from "./../../api/api";
import { userContext } from "./../../App";
import { Redirect, useHistory } from "react-router-dom";
import Navigation from "../../components/Navigation/navigation";
export const Login = (props) => {
  // email
  const [email, setEmail] = useState("");
  // password
  const [password, setPassword] = useState("");
  // message
  const [message, setMessage] = useState("");
  // share the login info across the user app
  const { authUser, setAuthUser } = useContext(userContext);
  const history = useHistory();

  //
  // _________________________________________________________

  const login = async () => {
    console.log(password, email);
    // object to make a login of a user
    const data = await Member.login({
      email: email,
      password: password,
    });
    console.log(data);
    setAuthUser(data.access_token);
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", data.member[0]._id);
    // return true;
  };
  useEffect(() => {
    // if Login dashboard

    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user") !== "") {
      history.push("/admin");
    }
  }, [authUser]);
  return (
    <div>
      {" "}
      {/* Top bar End */}
      <Navigation page="Login" />
      {/* Bottom Bar Start */}
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <a href="index.html">
                  <img src="assests/img/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar End */}
      {/* Breadcrumb Start */}
      {/* Breadcrumb End */}
      {/* Login Start */}
      <div className="login">
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-lg-6">
              <div className="register-form">
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name"</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Mobile No"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Retype Password</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-6">
              <div className="login-form">
                <div className="row">
                  <div className="col-md-6">
                    <label>E-mail / Username</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail / Username"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newaccount"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="newaccount"
                      >
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div className="ml-3">{message}</div>
                  <div className="col-md-12">
                    <button
                      onClick={() => {
                        login();
                      }}
                      className="btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}
      {/* Footer Start */}
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Get in Touch</h2>
                <div className="contact-info">
                  <p>
                    <i className="fa fa-map-marker" />
                    123 E Store, Los Angeles, USA
                  </p>
                  <p>
                    <i className="fa fa-envelope" />
                    email@example.com
                  </p>
                  <p>
                    <i className="fa fa-phone" />
                    +123-456-7890
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Follow Us</h2>
                <div className="contact-info">
                  <div className="social">
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                    <a href>
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Company Info</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Purchase Info</h2>
                <ul>
                  <li>
                    <a href="#">Pyament Policy</a>
                  </li>
                  <li>
                    <a href="#">Shipping Policy</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row payment align-items-center">
            <div className="col-md-6">
              <div className="payment-method">
                <h2>We Accept:</h2>
                <img
                  src="assests/img/payment-method.png"
                  alt="Payment Method"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-security">
                <h2>Secured By:</h2>
                <img src="assests/img/godaddy.svg" alt="Payment Security" />
                <img src="assests/img/norton.svg" alt="Payment Security" />
                <img src="assests/img/ssl.svg" alt="Payment Security" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Footer Bottom Start */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>
                Copyright © <a href="https://htmlcodex.com">HTML Codex</a>. All
                Rights Reserved
              </p>
            </div>
            <div className="col-md-6 template-by">
              <p>
                Template By <a href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}
      {/* Back to Top */}
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
};

// export default Login;
