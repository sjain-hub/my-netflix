import React, { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { validateData } from "../utils/helper";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const pass = useRef(null);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = () => {
    console.log(email.current.value, pass.current.value);

    const errMsg = validateData(email.current.value, pass.current.value);
    setError(errMsg);

    if (errMsg) return;

    if (isLoginForm) {
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <Form
      onSubmit={() => handleSubmit()}
      className="absolute w-1/3 z-10 flex flex-col gap-6 p-16 bg-black rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
    >
      <h1 className="text-white font-bold text-3xl tracking-wide mb-4">
        {isLoginForm ? "Sign In" : "Sign Up"}
      </h1>
      <p className="text-red-600">{error}</p>
      {!isLoginForm && (
        <input
          className="bg-transparent border border-gray-500 p-4 rounded-md text-white"
          type="text"
          placeholder="Enter Name"
        />
      )}
      <input
        ref={email}
        className="bg-transparent border border-gray-500 p-4 rounded-md text-white"
        type="email"
        placeholder="Enter Email"
      />
      <input
        ref={pass}
        className="bg-transparent border border-gray-500 p-4 rounded-md text-white"
        type="password"
        placeholder="Enter Password"
      />
      <button className="bg-red-600 text-white py-2 rounded-md opacity-100">
        {isLoginForm ? "Submit" : "Register"}
      </button>
      {isLoginForm ? (
        <p className="text-white mt-4">
          New to Netflix?
          <span
            onClick={() => toggleForm()}
            className="font-bold cursor-pointer ml-1"
          >
            Sign Up
          </span>
        </p>
      ) : (
        <p className="text-white mt-4">
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
