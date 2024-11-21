import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createAccount = async (data) => {
    console.log(data, "fghj");
    try {
      const userData = await axios.post("/api/v1/users/register", data);
      console.log(userData,"fghj");
      
      if (userData) {
        // alert("Account created Successfully");
        Swal.fire({
          title: "Account created Successfully",
          text: "Please Login to continue",
          icon: "success",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-inherit flex items-center justify-center">
      <form
        onSubmit={handleSubmit(createAccount)}
        className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            {...register("fullName", {
              required: true,
            })}
          />
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
          />{" "}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">
          Sign Up
        </button>
        <Link to="/login">
          <p className="text-base text-primary text-center my-6 hover:underline">
            Already have an account ?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
