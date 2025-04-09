import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import Browse from "./Browse";

const Body = () => {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
