import React from "react";

import { Link } from "react-router-dom";
import university from "../assets/university.jpg";
function Homepage() {
  return (
    <div className="w-11/12 m-auto py-8 h-[100vh]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="">
          <h1 className=" homepage__font ">
            Welcome to our Certificate Verification System! your confidentiality
            is what make us different
          </h1>
          <div className="py-4">
            <Link to={"/Check"}>
              <button className="btnPrimary text-white mr-4">
                Check Certificate
              </button>
            </Link>
            <Link to={"/Login"}>
              <button className="btnPrimary text-white ">Admin Login</button>
            </Link>
          </div>
        </div>
        <div className="">
          <img className="rounded" src={university} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
