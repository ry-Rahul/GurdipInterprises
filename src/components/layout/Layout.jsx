import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
