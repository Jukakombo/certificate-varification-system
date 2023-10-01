import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { createNews } from "../actions/news";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
function ContactUs() {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(initialState);
  const [showSuccess, setSuccess] = useState(false);
  const { firstName, lastName, email, subject, message, phone } = contacts;
  const handleSubmit = (e) => {
    setSuccess(true);
    e.preventDefault();
    dispatch(createNews(contacts));
    clear();
    setTimeout(() => {
      setSuccess(false);
    }, 8000);
  };

  const clear = () => {
    setContacts({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <Navigation />
      <div className="w-11/12 m-auto py-8">
        <h1 className="text-center font-bold text-xl my-4 text-[#d580e2]">
          Contact Us
        </h1>
        <p className="text-center lg:text-lg">
          Please Fill in the form with the correct information
        </p>
        {showSuccess ? (
          <div className="text-center text-2xl text-green-500 bg-pink-100 p-4 rounded mt-4">
            Thanking for contacting us, one of our staff will reply you within
            24hrs have a good day!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 md:w-4/5 m-auto py-8 gap-8">
              <div className="flex  flex-col">
                <label htmlFor="userName" className="text-lg py-">
                  First Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="bg-gray-100 p-2 outline-none rounded"
                  placeholder="Please enter your first name"
                  onChange={(e) =>
                    setContacts({ ...contacts, firstName: e.target.value })
                  }
                  value={firstName}
                  required
                />
              </div>
              <div className="flex  flex-col ">
                <label htmlFor="lastName" className="text-lg py-">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-100 p-2 outline-none rounded"
                  placeholder="Please enter your first name"
                  onChange={(e) =>
                    setContacts({ ...contacts, lastName: e.target.value })
                  }
                  value={lastName}
                  required
                />
              </div>
              <div className="flex  flex-col">
                <label htmlFor="email" className="text-lg py-">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-100 p-2 outline-none rounded"
                  placeholder="Please enter your  email"
                  onChange={(e) =>
                    setContacts({ ...contacts, email: e.target.value })
                  }
                  value={email}
                  required
                />
              </div>
              <div className="flex  flex-col ">
                <label htmlFor="phone" className="text-lg py-">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-100 p-2 outline-none rounded"
                  placeholder="Please enter your phone"
                  onChange={(e) =>
                    setContacts({ ...contacts, phone: e.target.value })
                  }
                  value={phone}
                  required
                />
              </div>
              <div className="flex  flex-col ">
                <label htmlFor="subject" className="text-lg py-">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-gray-100 p-2 outline-none rounded"
                  placeholder="Please enter your first name"
                  onChange={(e) =>
                    setContacts({ ...contacts, subject: e.target.value })
                  }
                  value={subject}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg py-">
                  Message
                </label>
                <textarea
                  id="message"
                  className="bg-gray-100 p-2 outline-none rounded"
                  name="message"
                  value={message}
                  onChange={(e) =>
                    setContacts({ ...contacts, message: e.target.value })
                  }
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#d580e2] text-white font-bold p-2 rounded w-[200px]  "
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
