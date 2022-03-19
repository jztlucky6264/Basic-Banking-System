import React from "react";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
  const history = useHistory();
  const { firstname, lastname, Email, Account, Balance, id } =
    (props.location && props.location) || {};

  return (
    <>
      <div className="card  mb-3 bg-transparent border-0 container mt-5">
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=166&q=80"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6  ">
            <div className="card-body bg-secondary  ">
              <ul className="list-group">
                <li className="list-group-item bg-info text-white">
                  {firstname + " " + lastname}
                </li>
                <li className="list-group-item bg-info text-white">{Email}</li>
                <li className="list-group-item bg-info text-white">
                  {Account}
                </li>
                <li className="list-group-item bg-info text-white">
                  ₹ {Balance}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center  mt-5 mx-auto">
        <button
          className="btn btn-primary col-3 mt-5 mb-5"
          type="button"
          onClick={() => {
            history.push({
              pathname: "/sendmoney",
              firstnamesender: firstname,
              lastnamesender: lastname,
              SenderBalance: Balance,
              id: id,
            });
          }}
        >
          Transfer Money
        </button>
      </div>
    </>
  );
};

export default Profile;
