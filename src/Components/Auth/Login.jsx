import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../../redux/features/auth/authSlice.js";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setLoading(true);

    try {
      const session = await axios.post("/api/v1/users/login", data);
      if (session) {
        setLoading(false);
        const userData = await axios.get("/api/v1/users/getuser");

        if (userData) dispatch(authLogin(userData.data.data));
        Swal.fire({
          title: "Logged in Successfully",
          icon: "success",
        });

        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Invalid Credentials",
        text: `${error.response.data.message}`,
        icon: "error",
      });
    }
  };

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit(login)}
          className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <input
              type="password"
              name="email"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">
            Sign In
          </button>
          <Link to="/signup">
            <p className="text-base text-primary text-center my-6 hover:underline">
              Need an account ?
            </p>
          </Link>
        </form>
        {loading && <h1>Loading</h1>}
      </div>
    </main>
  );
};

export default Login;
