import React, { useEffect, useState } from "react";
import { Member } from "./../../../../api/api";

export const AccountDetail = (props) => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const updateProfile = async () => {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      number: number,
      email: email,
    };

    const data = await Member.updateMember(localStorage.getItem("user"), obj);
    if (data === "success") {
      alert("Update Success");
    } else {
      alert("Update fail");
    }
  };
  useEffect(async () => {
    const data = await Member.getMemberByID(localStorage.getItem("user"));
    console.log(data);
    setFirst_Name(data.first_name);
    setLast_Name(data.last_name);
    setNumber(data.number);
    setEmail(data.email);
  }, []);
  return (
    <div>
      <h4>Account Details</h4>
      <div className="row">
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            value={first_name}
            onChange={(e) => {
              setFirst_Name(e.target.value);
            }}
            placeholder="First Name"
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            value={last_name}
            placeholder="Last Name"
            onChange={(e) => {
              setLast_Name(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="Mobile"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="col-md-12">
          {/* <input className="form-control" type="text" value={ } placeholder="Address" /> */}
        </div>
        <div className="col-md-12">
          <button
            onClick={() => {
              updateProfile();
            }}
            className="btn"
          >
            Update Account
          </button>
          <br />
          <br />
        </div>
      </div>
      <h4>Password change</h4>
      <div className="row">
        <div className="col-md-12">
          <input
            className="form-control"
            type="password"
            placeholder="Current Password"
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="New Password"
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
        <div className="col-md-12">
          <button className="btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};
