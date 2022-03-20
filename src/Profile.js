import React from "react";
import { useHistory } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import profileIMG from "./Img/profileImage.avif";
const Profile = (props) => {
  const history = useHistory();

  const { firstname, lastname, Email, Account, Balance, ind } =
    (props.location && props.location) || {};
  /* console.log(ind); */

  return (
    <>
      <SkeletonTheme baseColor="#ffff66" highlightColor="#444">
        <div className="card  mb-3 bg-transparent border-0 container mt-5">
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-4">
              <img
                src={profileIMG}
                alt="..."
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-6  ">
              <div className="card-body bg-secondary  ">
                <ul className="list-group">
                  <li className="list-group-item bg-info text-white">
                    {firstname || <Skeleton />}
                    <span>{lastname || <Skeleton />}</span>
                  </li>
                  <li className="list-group-item bg-info text-white">
                    {Email || <Skeleton />}
                  </li>
                  <li className="list-group-item bg-info text-white">
                    {Account || <Skeleton />}
                  </li>
                  <li className="list-group-item bg-info text-white">
                    ₹ {Balance || <Skeleton />}
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
                senderindx: ind,
              });
            }}
          >
            Transfer Money
          </button>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default Profile;
