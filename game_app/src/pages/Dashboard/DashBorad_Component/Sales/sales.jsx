import React, { useState } from "react";

export const Sales = ({ data }) => {
  const [data1, setData] = useState({});
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>No</th>
            <th>Post Title</th>
            <th>Game Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{el.postId.post_title}</td>
                <td>{el.postId.game_name}</td>
                <td>{el.postId.price}</td>
                <td>Purchased</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => {
                      setData(el.postId);
                    }}
                  >
                    View
                  </button>

                  <PostModel data={data1} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const PostModel = ({ data }) => {
  return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Game Cerdentails
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>User name :: {data.user_name}</div>
            <div>Password :: {data.password}</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
