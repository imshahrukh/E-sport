import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation/navigation";
import { GamePostCall, SoldGame } from "./../../api/api";

export const ProductDiscription = (props) => {
  const params = useLocation();
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    game_name: "",
    post_title: "",
    game_level: "",
    owner: {},
    status: "",
    game_point: "",
    discription: "",
    secrete_code: "",
    price: "",
    // login
    user_name: "",
    password: "",
    image: [],
  });
  console.log(params.state.id);

  const purchasedGame = async () => {
    const soldGame = {
      owner: localStorage.getItem("user"),
      postId: params.state.id,
    };

    const data = await SoldGame.addSoldGame(soldGame);

    if (data === "success") {
      alert("ID Purchased");
      setMessage("success");

      // update Post
      const message = await GamePostCall.updatePost(params.state.id, "Sold");
    } else {
      alert("Fail to Purchased Id");
    }

    // update Post
  };
  // console.log(this.props.location.state.params.id);
  useEffect(async () => {
    // call an Api and save the data and show it

    const datas = await GamePostCall.postById(params.state.id);
    // console.log(datas);
    setData(datas);
  }, []);
  return (
    <div>
      {/* <!-- Top bar Start --> */}
      <div class="top-bar">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <i class="fa fa-envelope"></i>
              support@email.com
            </div>
            <div class="col-sm-6">
              <i class="fa fa-phone-alt"></i>
              +012-345-6789
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top bar End --> */}

      <Navigation page="post discription" />
      {/* <!-- Nav Bar End -->       */}

      {/* <!-- Bottom Bar Start --> */}
      <div class="bottom-bar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-3">
              <div class="logo">
                <a href="#">
                  <img src="assests/img/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Bottom Bar End -->  */}

      {/* <!-- Breadcrumb Start --> */}

      {/* <!-- Breadcrumb End --> */}

      {/* <!-- Product Detail Start --> */}
      <div class="product-detail">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="product-detail-top">
                <div
                  class="row align-items-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div class="col-md-6">
                    <div class="product-slider-single normal-slider">
                      {data.image.map((el, key) => (
                        <img
                          key={key}
                          className="mb-3"
                          src={el}
                          alt="Product Image"
                        />
                      ))}
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="product-content">
                      <div class="title">
                        <h2>{data.game_title}</h2>
                      </div>

                      <div class="price">
                        <h4>Price:</h4>
                        <p>$ {data.price}</p>
                      </div>
                      <div class="action">
                        {localStorage.getItem("user") ===
                        data.owner._id ? null : (
                          <div>
                            {message === "success" ? null : (
                              <a
                                class="btn"
                                onClick={() => {
                                  purchasedGame();
                                }}
                              >
                                <i class="fa fa-shopping-bag"></i>Buy Now
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row product-detail-bottom">
                <div class="col-lg-12">
                  <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="pill"
                        href="#description"
                      >
                        Description
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="pill"
                        href="#specification"
                      >
                        Specification
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="pill" href="#reviews">
                        Reviews (1)
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div id="description" class="container tab-pane active">
                      <h4>Product description</h4>
                      <p>{data.discription}</p>
                    </div>
                    <div id="specification" class="container tab-pane fade">
                      <h4>Product specification</h4>
                      <ul>
                        <li>Game : {data.game_name}</li>
                        <li>Level/Rank : {data.game_level}</li>
                        <li>Points : {data.game_point}</li>
                        <li>owner : {data.owner.first_name}</li>
                      </ul>
                    </div>
                    <div id="reviews" class="container tab-pane fade">
                      <div class="reviews-submitted">
                        <div class="reviewer">
                          Phasellus Gravida - <span>01 Jan 2020</span>
                        </div>
                        <div class="ratting">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam.
                        </p>
                      </div>
                      <div class="reviews-submit">
                        <h4>Give your Review:</h4>
                        <div class="ratting">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="row form">
                          <div class="col-sm-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div class="col-sm-6">
                            <input type="email" placeholder="Email" />
                          </div>
                          <div class="col-sm-12">
                            <textarea placeholder="Review"></textarea>
                          </div>
                          <div class="col-sm-12">
                            <button>Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Side Bar Start --> */}

            {/* <!-- Side Bar End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Product Detail End --> */}

      {/* <!-- Brand Start --> */}
      <div class="brand"></div>
      {/* <!-- Brand End -->7 */}

      {/* <!-- Footer Start --> */}
      <div class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h2>Get in Touch</h2>
                <div class="contact-info">
                  <p>
                    <i class="fa fa-map-marker"></i>123 E Store, Los Angeles,
                    USA
                  </p>
                  <p>
                    <i class="fa fa-envelope"></i>email@example.com
                  </p>
                  <p>
                    <i class="fa fa-phone"></i>+123-456-7890
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h2>Follow Us</h2>
                <div class="contact-info">
                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
                <h2>Company Info</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="footer-widget">
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

          <div class="row payment align-items-center">
            <div class="col-md-6">
              <div class="payment-method">
                <h2>We Accept:</h2>
                <img
                  src="assests/img/payment-method.png"
                  alt="Payment Method"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="payment-security">
                <h2>Secured By:</h2>
                <img src="assests/img/godaddy.svg" alt="Payment Security" />
                <img src="assests/img/norton.svg" alt="Payment Security" />
                <img src="assests/img/ssl.svg" alt="Payment Security" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Footer Bottom Start --> */}
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 copyright">
              <p>
                Copyright &copy; <a href="https://htmlcodex.com">HTML Codex</a>.
                All Rights Reserved
              </p>
            </div>

            <div class="col-md-6 template-by">
              <p>
                Template By <a href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Bottom End -->        */}

      {/* <!-- Back to Top --> */}
      <a href="#" class="back-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>

      {/* <!-- JavaScript Libraries --> */}
    </div>
  );
};
