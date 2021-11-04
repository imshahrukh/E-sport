import axios from "axios";
import React, { useState } from "react";
import Navigation from "../../components/Navigation/navigation";
import { GamePostCall } from "./../../api/api";

export const GamePost = (props) => {
  const [imageSelected, setImageSelected] = useState("");
  const [image, setImage] = useState([]);
  const [game, setGame] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rank, setRank] = useState("");
  const [gamePoint, setGamePoints] = useState("");
  const [discrition, setDiscription] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "qitwzs7qac");

    axios
      .post("https://api.cloudinary.com/v1_1/madadgar/image/upload", formData)
      .then((res) => {
        console.log(res.data.url);
        setImage((data) => [...data, res.data.url]);
      });
  };

  const uploadData = async () => {
    const postData = {
      game_name: game,
      post_title: title,
      game_level: rank,
      owner: localStorage.getItem("user"),
      status: "Active",
      game_point: gamePoint,
      discription: discrition,
      secrete_code: Math.floor(Math.random() * 10011451),
      price: price,
      // login
      user_name: userName,
      password: password,
      image: image,
    };

    const message = await GamePostCall.addGame(postData);
    if (message === "success") {
      setMessage("Post add successfully");
    } else {
      setMessage("Fail to add post");
    }
  };
  return (
    <div>
      {" "}
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-envelope" />
              support@email.com
            </div>
            <div className="col-sm-6">
              <i className="fa fa-phone-alt" />
              +012-345-6789
            </div>
          </div>
        </div>
      </div>
      {/* Top bar End */}
      <Navigation page="Add Post" />
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
                    <label>Game</label>
                    <select
                      value={game}
                      onChange={(e) => {
                        setGame(e.target.value);
                      }}
                    >
                      <option value="PUBG">PUBG</option>
                      <option value="Clash Of Clane">Clash Of Clanes</option>
                      <option value="Valorant">Valorant</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Title</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Amount"</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Amount"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Level/Rank</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Level/Rank"
                      onChange={(e) => {
                        setRank(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Game Point</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Uc/Diamond/points"
                      onChange={(e) => {
                        setGamePoints(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Discription</label>
                    <textarea
                      className="form-control"
                      type="text"
                      placeholder="Discription"
                      onChange={(e) => {
                        setDiscription(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>User Name</label>
                    <textarea
                      className="form-control"
                      type="text"
                      placeholder="user name"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <textarea
                      className="form-control"
                      type="text"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="ml-3">
                    {image.map((el, key) => (
                      <p key={key}>{el}</p>
                    ))}
                  </div>
                  <div className="col-md-12">
                    <input
                      onChange={(e) => {
                        setImageSelected(e.target.files[0]);
                      }}
                      type="file"
                      name=""
                      id=""
                    />
                    <button
                      onClick={() => {
                        uploadImage();
                      }}
                      className="btn"
                    >
                      Upload
                    </button>
                  </div>
                  <div className="col-md-12">
                    <button
                      onClick={() => {
                        uploadData();
                      }}
                      className="btn"
                    >
                      Submit
                    </button>
                  </div>
                  <div>{message}</div>
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
