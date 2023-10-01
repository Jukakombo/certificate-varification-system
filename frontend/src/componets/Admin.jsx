import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function Admin({ setUser, user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    // jwt for manual
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      {/* <Navigation /> */}
      <div className="bg-[#EB9FF8] py-24 h-[100vh]">
        <div className="flex justify-between w-11/12 m-auto items-between text-white">
          <h1 className="font-bold text-2xl">
            Hi Admin, Welcome to Certificate Varification system
          </h1>
          <button
            onClick={() => dispatch(logout)}
            className="bg-[#D05EE2] p-2 text-white rounded"
          >
            Logout
          </button>
        </div>
        <div className="flex   w-11/12 m-auto py-8 ">
          <div className="sidebar bg-[#EB9FF8] border-2 border-white flex-[30%] p-4">
            {/* certificates */}
            <Link to="certificates">
              <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                Students Certificates
              </div>
            </Link>
            {/* create certificate */}
            <Link to="create-certificate">
              <div className="functions">
                <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                  Create Certificate
                </div>
              </div>
            </Link>
            {/* edit certifcate */}
            {/* <Link to="/edit-certificate">
              <div className="functions">
                <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                  Edit Certificate
                </div>
              </div>
            </Link> */}
            {/* delete certificate */}
            <Link to="delete-certificate">
              <div className="functions">
                <div className="p-2 bg-red-700  m-4 text-white rounded cursor-pointer">
                  Delete Certificate
                </div>
              </div>
            </Link>

            <Link to="contact-inbox">
              <div className="functions">
                <div className="p-2 bg-blue-700  m-4 text-white rounded cursor-pointer">
                  Contacts
                </div>
              </div>
            </Link>
            {/*logout  */}
            <button onClick={() => dispatch(logout)}>
              <div className="functions">
                <div className="p-2 bg-[#D05EE2] m-4 text-white rounded cursor-pointer">
                  Logout
                </div>
              </div>
            </button>
          </div>

          <div className="main_bar px-4 bg-white flex-[70%]">
            <h1>Only visible for authorized admin</h1>
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Admin;
