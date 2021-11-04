import React, { useState } from "react";
import Navigation from "../../components/Navigation/navigation";
import { Member } from "./../../api/api";
export const Registration = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const addUser = async () => {
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      number: number,
      password: password1,
    };

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      number === "" ||
      password1 === "" ||
      password2 === ""
    ) {
      alert("Filled the feilfs");
      return;
    }

    const data = await Member.addMember(user);

    if (data === "success") {
      alert("Member added");
    } else {
      alert("FAil to add member");
    }
  };
  return (
    <div>
      {" "}
      {/* Top bar End */}
      <Navigation page="registration" />
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
            <div className="col-lg-6">
              <div className="register-form">
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name"</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Mobile No"
                      onChange={(e) => {
                        setNumber(e.target.value);
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
                        setPassword1(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Retype Password</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword2(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      onClick={() => {
                        addUser();
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
