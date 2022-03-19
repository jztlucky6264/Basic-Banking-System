import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Customer = () => {
  const history = useHistory();
  const [datause, setDataUse] = useState([]);
  //fetching list of customer
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
  //fetching transection list

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table className="container  mt-5 table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Account Number</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {datause.map((val, ind) => {
            return (
              <tr
                key={val.id}
                onClick={() => {
                  history.push({
                    pathname: "/profile",
                    datause: { datause },
                    id: val.id,
                    firstname: val.firstname,
                    lastname: val.lastname,
                    Email: val.Email,
                    Account: val.Account,
                    Balance: val.Balance,
                  });
                }}
              >
                <th scope="row">{val.id}</th>
                <td>{val.firstname}</td>
                <td> {val.lastname}</td>
                <td>{val.Email}</td>
                <td>{val.Account}</td>
                <td>{val.Balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Customer;
