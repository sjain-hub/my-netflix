import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleIconClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="absolute z-10 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-48 ml-20"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img
            className="cursor-pointer w-10 h-10 rounded-md my-auto"
            onClick={handleIconClick}
            src={user?.photoURL}
            alt="user-icon"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
