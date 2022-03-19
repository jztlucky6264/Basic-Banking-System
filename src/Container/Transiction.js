import React from "react";

const Transiction = () => {
  return (
    <>
      {
        //money transfer btn click and input value onchange getting by function
        /*  const [data, setData] = useState({
    senderName: "",
    recieverName: "",
    Balance: "",
  }); */
        /*  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }; */
        /*   console.log(data);
  console.log(Balance1); */
        //const numberAsInt = parseInt(data.Balance, 10);
        /*   console.log(numberAsInt); */
        /*   console.log(Balance1 - numberAsInt); */
        /* const postData = async (e) => {
    const { senderName, recieverName, Balance } = data;
    e.preventDefault();

    if (senderName && recieverName && numberAsInt <= Balance1 && Balance) {
      const res = await fetch(
        "https://basic-banking-e3b64-default-rtdb.firebaseio.com/transection.json",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderName,
            recieverName,
            Balance,
          }),
        }
      );
      if (res) {
        setData({
          senderName: "",
          recieverName: "",
          Balance: "",
        });
        toast("Money Transfer Successfully");
      }
    } else {
      toast("Please Fill Valid details or Fund");
    }
  };
*/
      }
    </>
  );
};

export default Transiction;
