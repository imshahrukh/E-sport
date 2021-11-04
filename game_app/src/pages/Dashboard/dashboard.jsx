import React, { useEffect, useState } from "react";
import { DashBoradComponents } from "./DashBorad_Component/Dashboard/dashboard";
import { Sales } from "./DashBorad_Component/Sales/sales";
import { AccountDetail } from "./DashBorad_Component/AccountDetials/accountDetail";
import { Redirect, useHistory } from "react-router-dom";
import { GamePostCall, SoldGame } from "./../../api/api";
import Navigation from "../../components/Navigation/navigation";

export const Dashborad = (props) => {
  const history = useHistory();
  const [ownerPosts, setOwnerPosts] = useState([]);
  const [soldPost, setSoldPost] = useState([]);

  useEffect(async () => {
    if (localStorage.getItem("user") === "") {
      history.push("/login");
    }

    // get my post
    const data = await GamePostCall.ownerPostById(localStorage.getItem("user"));
    // console.log(data);
    setOwnerPosts(data);

    const soldGames = await SoldGame.getSoldGame(localStorage.getItem("user"));
    // get my purchase
    setSoldPost(soldGames);
    // console.log(soldGames);
  }, []);
  return (
    <div>
      <div>
        {/* Top bar Start */}

        {/* Top bar End */}
        <Navigation page="Profile" />
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
        {/* My Account Start */}
        <div className="my-account">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="nav flex-column nav-pills"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="dashboard-nav"
                    data-toggle="pill"
                    href="#dashboard-tab"
                    role="tab"
                  >
                    <i className="fa fa-tachometer-alt" />
                    Dashboard
                  </a>
                  <a
                    className="nav-link"
                    id="orders-nav"
                    data-toggle="pill"
                    href="#orders-tab"
                    role="tab"
                  >
                    <i className="fa fa-shopping-bag" />
                    Orders
                  </a>
                  {/* <a
                    className="nav-link"
                    id="payment-nav"
                    data-toggle="pill"
                    href="#payment-tab"
                    role="tab"
                  >
                    <i className="fa fa-credit-card" />
                    Payment Method
                  </a> */}
                  {/* <a
                    className="nav-link"
                    id="address-nav"
                    data-toggle="pill"
                    href="#address-tab"
                    role="tab"
                  >
                    <i className="fa fa-map-marker-alt" />
                    address
                  </a> */}
                  <a
                    className="nav-link"
                    id="account-nav"
                    data-toggle="pill"
                    href="#account-tab"
                    role="tab"
                  >
                    <i className="fa fa-user" />
                    Account Details
                  </a>
                  <a
                    className="nav-link"
                    onClick={() => {
                      localStorage.setItem("user", "");
                      history.push("/login");
                    }}
                  >
                    <i className="fa fa-sign-out-alt" />
                    Logout
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="dashboard-tab"
                    role="tabpanel"
                    aria-labelledby="dashboard-nav"
                  >
                    <DashBoradComponents data={ownerPosts} />
                    {/* {ownerPosts && ownerPosts.map((el, key) => {})} */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="orders-tab"
                    role="tabpanel"
                    aria-labelledby="orders-nav"
                  >
                    <Sales data={soldPost} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="payment-tab"
                    role="tabpanel"
                    aria-labelledby="payment-nav"
                  >
                    <h4>Payment Method</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In condimentum quam ac mi viverra dictum. In efficitur
                      ipsum diam, at dignissim lorem tempor in. Vivamus tempor
                      hendrerit finibus. Nulla tristique viverra nisl, sit amet
                      bibendum ante suscipit non. Praesent in faucibus tellus,
                      sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien
                      eget arcu rhoncus scelerisque.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="address-tab"
                    role="tabpanel"
                    aria-labelledby="address-nav"
                  >
                    <h4>Address</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <h5>Payment Address</h5>
                        <p>123 Payment Street, Los Angeles, CA</p>
                        <p>Mobile: 012-345-6789</p>
                        <button className="btn">Edit Address</button>
                      </div>
                      <div className="col-md-6">
                        <h5>Shipping Address</h5>
                        <p>123 Shipping Street, Los Angeles, CA</p>
                        <p>Mobile: 012-345-6789</p>
                        <button className="btn">Edit Address</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="account-tab"
                    role="tabpanel"
                    aria-labelledby="account-nav"
                  >
                    <AccountDetail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* My Account End */}
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
                  Copyright © <a href="https://htmlcodex.com">HTML Codex</a>.
                  All Rights Reserved
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
    </div>
  );
};
