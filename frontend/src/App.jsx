import Home from "./componets/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Howitworks from "./componets/Howitworks";
import AboutUs from "./componets/AboutUs";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Admin from "./componets/Admin";
import { useState } from "react";
import CreateCertificate from "./componets/CreateCertificate";
import ViewCertificate from "./componets/ViewCertificate";
import { getContacts } from "./actions/contacts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DeleteCertificate from "./componets/DeleteCertificate";
import Certificates from "./componets/Certificates";
import SearchById from "./componets/SearchByID";
import Loader from "./componets/Loader";
import ContactUs from "./componets/ContactUs";
import PrivacyPolicy from "./componets/PrivacyPolicy";
import TermsAndCondition from "./componets/TermsAndCondition";
import Inbox from "./componets/Inbox";
import { getNews } from "./actions/news";
function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  // Loader
  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Check" exact element={<SearchById />} />
            <Route path="/How It Works" exact element={<Howitworks />} />
            <Route path="/About Us" exact element={<AboutUs />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-condition"
              element={<TermsAndCondition />}
            />

            <Route
              path="/view-certificate/:id"
              exact
              element={<ViewCertificate />}
            />

            <Route
              path="/admin"
              element={<Admin setUser={setUser} user={user} />}
            >
              <Route
                path="create-certificate"
                element={<CreateCertificate />}
              />
              <Route
                path="delete-certificate"
                element={<DeleteCertificate />}
              />
              <Route path="certificates" element={<Certificates />} />
              <Route path="contact-inbox" element={<Inbox />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
