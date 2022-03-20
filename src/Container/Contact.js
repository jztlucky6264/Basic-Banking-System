import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    Textarea: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { fullname, phone, email, city, state, zip, Textarea } = data;

    if (fullname && phone && email && city && state && zip && Textarea) {
      const res = await fetch(
        "https://customerquery-40554-default-rtdb.firebaseio.com/customer.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            phone,
            email,
            city,
            state,
            zip,
            Textarea,
          }),
        }
      );
      if (res) {
        setData({
          fullname: "",
          phone: "",
          email: "",
          city: "",
          state: "",
          zip: "",
          Textarea: "",
        });
        toast("Your query registed sucessfully");
      }
    } else {
      toast("please fill all the data");
    }
  };
  /* const formSubmit = (e) => {
    toast("Your query registed sucessful");
    e.preventDefault();
  }; */
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div mb-5 ">
        <div className="row ">
          <div className="col-md-6 col-1o mx-auto">
            <form
              method="POST"
              // onSubmit={formSubmit}
              className="row g-3 needs-validation"
              noValidate
            >
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Phone
                </label>
                <input
                  type="Text"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  id="validationCustom02"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={data.city}
                  onChange={InputEvent}
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">
                  State
                </label>
                <select
                  name="state"
                  value={data.state}
                  onChange={InputEvent}
                  className="form-select"
                  id="validationCustom04"
                  required
                >
                  <option disabled value="">
                    Choose...
                  </option>
                  <option>Delhi</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  name="zip"
                  value={data.zip}
                  onChange={InputEvent}
                  required
                />

                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="validationCustom06" className="form-label">
                  Textarea
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="validationCustom06"
                  rows="3"
                  name="Textarea"
                  value={data.Textarea}
                  onChange={InputEvent}
                  required
                ></textarea>
                <div className="invalid-feedback">Looks good !</div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  onClick={postData}
                  type="submit"
                >
                  Submit form
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
