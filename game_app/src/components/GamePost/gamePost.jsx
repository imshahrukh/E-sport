import React from "react";
import "./gamePost.css";
import { Redirect, useHistory, Link } from "react-router-dom";

function GamePost({ data }) {
  const history = useHistory();

  return (
    <div>
      <div className="center">
        <div className="card">
          <div className="additional">
            <div className="user-card">
              <div className="level center text-center">
                Level {data.game_level}
              </div>
              {/* <div className="points center">5,312 Points</div> */}
              <div
                className="circle-rounded mt-5 ml-4"
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  // border: "1px solid red",
                }}
              ></div>
              <li
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                <Link
                  to={{
                    pathname: "/post",
                    state: { id: data._id },
                  }}
                  style={{
                    color: "black",
                    background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  View Post
                </Link>
                {/* Go */}
              </li>
            </div>
            <div className="more-info">
              <h1>
                {data.owner.first_name} {data.owner.last_name}
              </h1>
              <div className="coords">
                <span>Game Name</span>
                <span>{data.game_name}</span>
              </div>
              <div className="coords">
                <span>Level/Rank</span>
                <span>{data.game_level}</span>
              </div>
              <div className="coords">
                <span>Game Points (UC/diamond)</span>
                <span>{data.game_point}</span>
              </div>

              <div className="stats">
                <div>
                  <div className="title">Awards</div>
                  <i className="fa fa-trophy" />
                  <div className="value">2</div>
                </div>
                <div>
                  <div className="title">Matches</div>
                  <i className="fa fa-gamepad" />
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Pals</div>
                  <i className="fa fa-gamepad" />
                  <div className="value">123</div>
                </div>
                <div>
                  <div className="title">Coffee</div>
                  <i className="fa fa-coffee" />
                  <div className="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>{data.post_title}</h1>
            <p>{data.discription}</p>
            <span className="more popup-animation">
              Mouse over the card for more info
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePost;
