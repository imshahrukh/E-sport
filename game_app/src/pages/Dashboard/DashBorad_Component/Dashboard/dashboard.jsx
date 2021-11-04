import React, { useState } from "react";
import "./dashboard.css";
import { GamePostCall, SoldGame } from "./../../../../api/api";

export const DashBoradComponents = ({ data }) => {
  const [text, setText] = useState("Cancel Post");
  return (
    <div>
      <h4>Dashboard</h4>

      <div className="row prd-details">
        <div className="col-4">Name</div>
        <div className="col-4">Game Type</div>
        <div className="col-4">Status</div>
      </div>
      {data &&
        data.map((el, key) => (
          <div className="row prd-details">
            <div className="col-4">{el.post_title}</div>
            <div className="col-4">{el.game_name}</div>
            {/* <div className="col-4">{el.status}</div> */}
            {el.status === "Active" ? (
              <div
                onClick={async () => {
                  // call an API
                  const message = await GamePostCall.updatePost(
                    el._id,
                    "Closed"
                  );
                  alert("Post Cancled");
                  setText("Closed");
                }}
                className="text-center btn-prd "
              >
                Cancel Post
              </div>
            ) : el.status === "Sold" ? (
              <div className="col-1 text-center prd-details--status status--success">
                Sold
              </div>
            ) : (
              <div className="col-1 text-center prd-details--status status--close">
                Closed
              </div>
            )}
          </div>
        ))}
      {/* values */}
      {/* <div className="row mt-3 prd-details">
        <div className="col-4">Selling Car Profile</div>
        <div className="col-4">Racing Game</div>
        <div className="col-1 text-center prd-details--status status--success">
          Sold
        </div>
      </div> */}
      {/* <div className="row mt-3 prd-details">
        <div className="col-4">Pubg Game</div>
        <div className="col-4">Battle Game</div>
        <div className="text-center btn-prd ">Cancel Post</div>
      </div> */}
      {/* <div className="row mt-3 prd-details">
        <div className="col-4">Clash of Clain</div>
        <div className="col-4">fun game</div>
        <div className="col-1 text-center prd-details--status status--close">
          Closed
        </div>
      </div> */}
    </div>
  );
};
