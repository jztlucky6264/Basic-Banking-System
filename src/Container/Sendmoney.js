import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sendmoney = (props) => {
  //get history for redirect

  const history = useHistory();

  //getting data by props

  const { firstnamesender, lastnamesender, SenderBalance, id } =
    (props.location && props.location) || {};

  /*get id /indx of user */

  console.log(id);

  const [datause, setDataUse] = useState([]);
  const getData = async (e) => {
    try {
      const res = await fetch(
        "https://basic-banking-e3b64-default-rtdb.firebaseio.com/customer.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      setDataUse(data);
      if (!res.ok === 200) {
        const error = new Error(res.error);
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //update data in database

  const patchData = async (e) => {
    e.preventDefault();
    fetch(
      `https://basic-banking-e3b64-default-rtdb.firebaseio.com/customer/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Balance: 5 }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.Balance);
      });
  };

  return (
    <>
      <form
        method="PATCH"
        className=" row vertical-center-row  g-4  container mt-5"
      >
        <div className="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label htmlFor="validationDefault03" className="form-label">
              send by
            </label>
            <select className="form-select" id="validationDefault03" required>
              <option>select</option>
              <option key={id}>{firstnamesender + " " + lastnamesender}</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div className="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label htmlFor="validationDefault04" className="form-label">
              Recieve by
            </label>
            <select className="form-select" id="validationDefault04" required>
              {datause.map((val, ind) => {
                return (
                  <option key={val.id}>
                    {val.firstname + " " + val.lastname}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label htmlFor="validationCustom01" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-center ">
          <button
            className="btn btn-primary col-4  "
            type="submit"
            onClick={patchData}
          >
            Send Money
          </button>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default Sendmoney;
