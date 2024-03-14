import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center">
      <Link
        to={"/home"}
        className="d-flex gap-3 align-items-center text-decoration-none"
      >
        <img src="/c-logo.png" height={60} />
        <h3 className="text-light ">
          Coinba<span className="text-warning ">Ƨ</span>e
        </h3>
      </Link>
      <nav className="d-flex gap-3 ">
        <NavLink
          to={"/"}
          className={"text-warning text-decoration-none fw-bold fs-4"}
        >
          Login
        </NavLink>
        <NavLink
          to={"/home"}
          className={"text-warning text-decoration-none fw-bold fs-4"}
        >
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
