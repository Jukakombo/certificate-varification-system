import { useState } from "react";
import logo from "../assets/Uoj-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const onAndOff = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const close = () => {
    setIsOpen(false);
  };
  const navigation = [
    {
      _id: "kjdjd",
      name: "Home",
    },
    {
      _id: "kjdkjjsd",
      name: "Check",
    },
    {
      _id: "kzed34jdjd",
      name: "About us",
    },
    {
      _id: "kzedssds34jdjd",
      name: "How It Works",
    },
    {
      _id: "ksazzed3s4jdjd",
      name: "Login",
    },
  ];
  return (
    <div className=" primaryBackgroun nvigation_bg_color">
      <div className="  primary__width  py-4 md:flex items-center justify-between">
        <div className="flex  items-center ">
          <Link to="/">
            <img
              className="md:w-[60px] mr-4 mobile__logo"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="text-center font-bold text-white logo__text">
            <p>University of Juba</p>
            <p>Certificate Verification System</p>
          </div>
        </div>
        <div className="humberger__menu hidden " onClick={onAndOff}>
          {isOpen ? (
            <AiOutlineClose className="text-white" size={30} />
          ) : (
            <AiOutlineMenu className="text-white" size={30} />
          )}
        </div>
        <nav className="desktop__view">
          <ul className="flex items-center">
            {navigation.map((x) => (
              <Link key={x._id} to={`/${x.name}`}>
                <li className="mx-4 font-semibold text-white cursor-pointer">
                  {x?.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* mobile views */}
        {isOpen && (
          <nav className="mobile__view md:hidden">
            <ul className="flex flex-col items-center mt-4">
              {navigation.map((x) => (
                <Link className="w-full" key={x._id} to={`/${x.name}`}>
                  <li className="mx-4 font-semibold my-2 cursor-pointer text-white cursor-pointer copyright ">
                    {x?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navigation;
