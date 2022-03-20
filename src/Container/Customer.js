import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

import { useHistory } from "react-router-dom";

const Customer = () => {
  const history = useHistory();
  const [datause, setDataUse] = useState([]);
  //fetching list of customer
  const getData = async (e) => {
    const db = getDatabase();
    const starCountRef = ref(db, "customer/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      /*  console.log(data); */
      setDataUse(data);
    });
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
                    ind: ind,
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
