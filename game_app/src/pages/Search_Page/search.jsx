import React, { useState, useEffect } from "react";
import GamePost from "./../../components/GamePost/gamePost";

import { GamePostCall } from "./../../api/api";
import Navigation from "../../components/Navigation/navigation";
export const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [gameType, setGameType] = useState("");
  const [gamePost, setGamePosts] = useState([]);
  const [duplicateGamePost, setDuplicateGamePosts] = useState([]);

  const filterDateByInput = (s) => {
    if (s === "") {
      setDuplicateGamePosts(gamePost);
    } else {
      const data = gamePost.filter((el) => el.post_title.includes(s));
      setDuplicateGamePosts(data);
    }
  };

  const filterDatabyOption = (option) => {
    if (option === "") {
      setDuplicateGamePosts(gamePost);
      return;
    }
    const data = gamePost.filter((el) => el.game_name === option);
    setDuplicateGamePosts(data);
  };

  const getData = async () => {
    const data = await GamePostCall.gamePost({
      type: "all",
      game: gameType,
      search: "",
    });
    console.log(data.data.gamePost);
    setGamePosts(data.data.gamePost);
    setDuplicateGamePosts(data.data.gamePost);
  };
  // get the games
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* Top bar Start */}
      {/* Top bar End */}
      <Navigation page="Home" />
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
          </div>
        </div>
      </div>
      {/* Bottom Bar End */}
      {/* Breadcrumb Start */}
      {/* Breadcrumb End */}
      {/* Product List Start */}
      <div className="product-view">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="product-view-top">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="product-search">
                          <input
                            onChange={(e) => {
                              filterDateByInput(e.target.value);
                              setSearch(e.target.value);
                            }}
                            type="email"
                            defaultValue=""
                            placeholder="Search Post by title"
                          />
                          <button>
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="product-short">
                          <div className="dropdown">
                            <div
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Product short by
                            </div>
                            <div className="dropdown-menu dropdown-menu-right">
                              <p
                                onClick={() => {
                                  setGameType("");
                                  filterDatabyOption("");
                                }}
                                className="dropdown-item"
                              >
                                All
                              </p>
                              <p
                                onClick={() => {
                                  setGameType("PUBG");
                                  filterDatabyOption("PUBG");
                                }}
                                className="dropdown-item"
                              >
                                PUBG
                              </p>
                              <p
                                onClick={() => {
                                  setGameType("Valorant");
                                  filterDatabyOption("Valorant");
                                }}
                                className="dropdown-item"
                              >
                                Valorant
                              </p>
                              <p
                                onClick={() => {
                                  setGameType("Clash Of Clanes");
                                  filterDatabyOption("Clash Of Clanes");
                                }}
                                className="dropdown-item"
                              >
                                Clash Of Clanes
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                        <div className="product-price-range">
                          <div className="dropdown">
                            <div
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Product price range
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="mt-5"></disv> */}
                <div
                  className="postion-relative row mr-5"
                  style={
                    {
                      // border: "1px solid red",
                      // width: "200vw",
                    }
                  }
                >
                  {duplicateGamePost &&
                    duplicateGamePost.map((el, key) => (
                      <div key={key} className="col-md-4">
                        <GamePost data={el} />
                      </div>
                    ))}

                  {/* <div className="col-md-6">
                    <GamePost />
                  </div>
                  <div className="col-md-6">
                    <GamePost />
                  </div>
                  <div className="col-md-6">
                    <GamePost />
                  </div> */}
                </div>
              </div>
              {/* Pagination Start */}
              {/* <div className="col-md-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
              {/* Pagination Start */}
            </div>
            {/* Side Bar Start */}
            <div className="col-lg-4 sidebar">
              {/* <div className="sidebar-widget category">
                <h2 className="title">Category</h2>
                <nav className="navbar bg-light">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-female" />
                        PC Game
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-child" />
                        Mobile Game
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-tshirt" />
                        Play Station Games
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-mobile-alt" />
                        Online Games
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}

              {/* <div className="sidebar-widget brands">
                <h2 className="title">Our Brands</h2>
                <ul>
                  <li>
                    <a href="#">Nulla </a>
                    <span>(45)</span>
                  </li>
                  <li>
                    <a href="#">Curabitur </a>
                    <span>(34)</span>
                  </li>
                  <li>
                    <a href="#">Nunc </a>
                    <span>(67)</span>
                  </li>
                  <li>
                    <a href="#">Ullamcorper</a>
                    <span>(74)</span>
                  </li>
                  <li>
                    <a href="#">Fusce </a>
                    <span>(89)</span>
                  </li>
                  <li>
                    <a href="#">Sagittis</a>
                    <span>(28)</span>
                  </li>
                </ul>
              </div> */}
              {/* <div className="sidebar-widget tag">
                <h2 className="title">Tags Cloud</h2>
                <a href="#">Lorem ipsum</a>
                <a href="#">Vivamus</a>
                <a href="#">Phasellus</a>
                <a href="#">pulvinar</a>
                <a href="#">Curabitur</a>
                <a href="#">Fusce</a>
                <a href="#">Sem quis</a>
                <a href="#">Mollis metus</a>
                <a href="#">Sit amet</a>
                <a href="#">Vel posuere</a>
                <a href="#">orci luctus</a>
                <a href="#">Nam lorem</a>
              </div> */}
            </div>
            {/* Side Bar End */}
          </div>
        </div>
      </div>
      {/* Product List End */}
      {/* Brand Start */}
      {/* Brand End */}
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
