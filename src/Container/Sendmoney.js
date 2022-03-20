import { getDatabase, onValue, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "./firebase";

const Sendmoney = (props) => {
  //get history for redirect
  const history = useHistory();

  //getting data by props
  const { firstnamesender, lastnamesender, SenderBalance, senderindx } =
    (props.location && props.location) || {};

  console.log(senderindx);
  //store data of users
  const [datause, setDataUse] = useState([]);

  /*store id /indx of user */
  const [index, setindex] = useState([]);

  //store old balance of reciever
  const [preBalancerecieve, setPreBalancerecieve] = useState();

  const getData = async (e) => {
    const db = getDatabase();
    const starCountRef = ref(db, "customer/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setDataUse(data);
    });
  };
  //fetching old balance of reciever
  const getBalance = async (e) => {
    const db = getDatabase();
    const starCountRef = ref(db, "customer/" + index + "/Balance");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setPreBalancerecieve(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(preBalancerecieve);

  //update data in database

  const [amount, setAmount] = useState({
    Balancesend: "",
  });
  console.log("index of Reciever", index);
  const BalanceChange = (event) => {
    const { name, value } = event.target;
    setAmount({ ...amount, [name]: value });
  };
  //convert string data into integer
  const numberAsInt = parseInt(amount.Balancesend, 10);
  console.log("string covert to integer", numberAsInt);
  const senderUpdatebalance = SenderBalance - numberAsInt;
  console.log(senderUpdatebalance);
  //reciever data
  const numberAsInt2 = parseInt(preBalancerecieve, 10);

  const Newbalance = numberAsInt2 + numberAsInt;
  console.log(Newbalance);
  //update the data

  const patchData = async (e) => {
    e.preventDefault();
    if (numberAsInt <= SenderBalance) {
      update(ref(database, "customer/" + senderindx), {
        Balance: senderUpdatebalance,
      })
        .then(console.log)
        .catch(console.log);

      update(ref(database, "customer/" + index), {
        Balance: Newbalance,
      })
        .then(console.log)
        .catch(console.log);

      toast("Money Transfer   Successfully");
      setAmount({
        Balancesend: "",
      });
    } else {
      toast("Insufficient Fund");
    }
  };

  return (
    <>
      <form
        method=""
        className=" row vertical-center-row   g-4  container mt-5"
      >
        <div className="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label htmlFor="validationDefault03" className="form-label">
              send by
            </label>
            <select className="form-select" id="validationDefault03" required>
              <option key={senderindx} defaultValue>
                {firstnamesender + " " + lastnamesender}
              </option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div className="col-md-12 d-flex justify-content-center ">
          <div className="w-50">
            <label htmlFor="validationDefault04" className="form-label">
              Recieve by
            </label>
            <select
              onClick={getBalance}
              onChange={(e) => {
                setindex(e.target.value);
              }}
              className="form-select"
              id="validationDefault04"
              required
            >
              {datause.map((val, ind) => {
                return (
                  <option key={val.id} value={ind}>
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
              name="Balancesend"
              value={amount.Balancesend}
              type="number"
              className="form-control"
              id="validationCustom01"
              onChange={BalanceChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-evenly">
          <button
            className="btn btn-primary col-4  "
            type="submit"
            onClick={patchData}
          >
            Send Money
          </button>

          <button
            className="btn btn-primary col-4  
          "
            onClick={() => {
              history.push("/customer");
            }}
          >
            Go to customer list
          </button>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default Sendmoney;
