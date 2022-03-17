import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Sendmoney = (props) => {
  const history = useHistory();
  const { firstnamesender, lastnamesender, Balance } =
    (props.location && props.location) || {};
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
      console.log(data);
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

  const [amount, setAmount] = useState("");

  const AmountChange = (e) => {
    setAmount(e.target.value);
  };
  const TransferClick = (e) => {
    e.preventDefault();
    if (amount > Balance) {
      alert("insufficient balance");
    } else {
      alert("money transfer successfully");
      setAmount(" ");
      history.push("/customer");
    }
  };

  return (
    <>
      <form class=" row vertical-center-row  g-4  container m-5">
        <div class="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label for="validationCustom01" class="form-label">
              Sent By
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              disabled={true}
              value={firstnamesender + " " + lastnamesender}
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div class="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label for="validationDefault04" class="form-label">
              Recieve by
            </label>
            <select class="form-select" id="validationDefault04" required>
              {datause.map((val, ind) => {
                return (
                  <option selected value="">
                    {val.firstname + " " + val.lastname}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div class="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label for="validationCustom01" class="form-label">
              Amount
            </label>
            <input
              onChange={AmountChange}
              value={amount}
              type="number"
              class="form-control"
              id="validationCustom01"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center ">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center ">
          <button
            class="btn btn-primary col-4  "
            type="submit"
            onClick={TransferClick}
          >
            Send Money
          </button>
        </div>
      </form>
    </>
  );
};

export default Sendmoney;
