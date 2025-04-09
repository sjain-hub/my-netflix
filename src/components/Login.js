import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <LoginForm />
      <img
        className="brightness-75"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
        alt="background"
      />
    </div>
  );
};

export default Login;
