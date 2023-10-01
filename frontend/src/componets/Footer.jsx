import React from "react";
import logo from "../assets/Uoj-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
  const [openHandler, setOpenHandler] = useState(true);

  const [subcribe, setSubcribe] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenHandler(false);
  };
  return (
    <>
      <div className="primaryBackgroun nvigation_bg_color py-4  ">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 primary__width">
          <div className="text-center flex flex-col items-center text-white">
            <img src={logo} className="w-[60px] text-center" alt="Logo" />
            <p>
              This system is designed to help you manage and track your
              certificates. With this system, you can easily store, organize,
              and access all of your certificates in one place.
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-white">Navigations</h1>
            <ul>
              <ul>
                <Link to="/">
                  <li className="text-xl text-white cursor-pointer">Home</li>
                </Link>
                <Link to="/Check">
                  <li className="text-xl text-white cursor-pointer">
                    Check / verify Certificate
                  </li>
                </Link>
                <Link to="/About us">
                  <li className="text-xl text-white cursor-pointer">
                    About Us
                  </li>
                </Link>
                <Link to="/Contact">
                  <li className="text-xl text-white cursor-pointer">Contact</li>
                </Link>
                {/* <Link to="/Check"></Link> */}
              </ul>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-white">Links</h1>
            <ul>
              <Link to="/privacy-policy">
                <li className="text-xl text-white cursor-pointer">
                  Privacy Policy
                </li>
              </Link>

              <Link to="/How It Works">
                <li className="text-xl text-white cursor-pointer">
                  How it works
                </li>
              </Link>
              <Link to={"/Login"}>
                <li className="text-xl text-white cursor-pointer">
                  Admin/Login
                </li>
              </Link>
              <Link to="/terms-and-condition">
                <li className="text-xl text-white cursor-pointer">
                  Terms & Conditions
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold text-white">Subscribe</h1>
            <ul>
              <li className="text-xl text-white cursor-pointer">
                Stay updated with us
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              {openHandler ? (
                <div className="flex items-center flex-col">
                  <input
                    type="email"
                    name="subscribe"
                    placeholder="Enter email...."
                    className="p-2 rounded w-full my-2 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="btnPrimary text-white w-full my-2"
                  >
                    Subscribe
                  </button>
                </div>
              ) : (
                <h1 className="text-green-600 font-bold text-2xl bg-gray-100 p-2 rounded text-center mt-2">
                  Thank for subscribing into our newsletter!
                </h1>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="text-center copyright">
        <p>copyright &copy;{new Date().getFullYear()}. Allrights reserved</p>
        <p className="text-white">Developed by Noah Dujé</p>
      </div>
    </>
  );
}

export default Footer;
