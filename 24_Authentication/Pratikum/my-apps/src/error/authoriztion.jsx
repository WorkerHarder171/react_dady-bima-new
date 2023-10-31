import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return (
    <div className="flex flex-column align-items-center justify-content-center text-center font-bold h-screen mx-auto">
      <p>401</p>
      <div>Authoriztion</div>
      <p>You need to login first!</p>
      <Link className="underline" to={"/"}>Login</Link>
    </div>
  );
};

export default UnAuthorized;
