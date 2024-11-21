import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import store from "../../Zustand/State";
import Translator from "../Translator/Translotor";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";

function Navbar() {
  const { sectionRefs } = store();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    navigate("/terms");
  };

  const homeClick = () => {
    navigate("/");
  };

  const LoginClick = () => {
    navigate("/login");
  };

  const SignClick = () => {
    navigate("/signUp");
  };

  const logoutHandler = async () => {
    await axios.post("/api/v1/users/logout").then(() => {
      dispatch(logout());
      Swal.fire({
        title: "Logged out Successfully",
        icon: "success",
      });
    });
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full pt-8">
      <div className="flex-1 pl-20">
        <img src={logo} alt="Logo" className="h-11" />
      </div>
      <div className="flex-none pr-20">
        <ul className="menu menu-horizontal px-1 flex space-x-4">
          <li onClick={homeClick}>
            <a>Home</a>
          </li>
          <li onClick={() => scrollToSection(sectionRefs.searchingHerbRef)}>
            <a>Details</a>
          </li>
          <li onClick={() => scrollToSection(sectionRefs.exploreHerbsRef)}>
            <a>Features</a>
          </li>
          <li onClick={() => scrollToSection(sectionRefs.herbalEducationRef)}>
            <a>Fact</a>
          </li>
          <li onClick={() => scrollToSection(sectionRefs.usersEntryRef)}>
            <a>Users</a>
          </li>
          <li onClick={handleClick}>
            <a>Terms Condition</a>
          </li>
          {authStatus ? (
            <li onClick={logoutHandler}>
              <a>Logout</a>
            </li>
          ) : (
            <div>
              <li onClick={LoginClick}>
                <a>Login</a>
              </li>
              <li onClick={SignClick}>
                <a>Sign Up</a>
              </li>
            </div>
          )}

          {/* Add Google Translate widget */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
