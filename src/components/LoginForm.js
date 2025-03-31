import React, { useState } from "react";
import { Form } from "react-router-dom";

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <Form className="absolute w-1/3 z-10 flex flex-col gap-6 p-16 bg-black rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
      <h1 className="text-white font-bold text-3xl tracking-wide">
        {isLoginForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isLoginForm && (
        <input
          className="bg-transparent border border-gray-500 p-4 rounded-md"
          type="text"
          placeholder="Enter Name"
        />
      )}
      <input
        className="bg-transparent border border-gray-500 p-4 rounded-md"
        type="email"
        placeholder="Enter Email"
      />
      <input
        className="bg-transparent border border-gray-500 p-4 rounded-md"
        type="password"
        placeholder="Enter Password"
      />
      <button className="bg-red-600 text-white py-2 rounded-md opacity-100">
        {isLoginForm ? "Submit" : "Register"}
      </button>
      {isLoginForm ? (
        <p className="text-white">
          New to Netflix?
          <span
            onClick={() => toggleForm()}
            className="font-bold cursor-pointer ml-1"
          >
            Sign Up
          </span>
        </p>
      ) : (
        <p className="text-white">
          Already a user?
          <span
            onClick={() => toggleForm()}
            className="font-bold cursor-pointer ml-1"
          >
            Sign In
          </span>
        </p>
      )}
    </Form>
  );
};

export default LoginForm;
