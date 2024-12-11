import React from "react";
import { Link } from "react-router-dom";

function DesktopNav({ menuItems, Logo }) {
  const updatedMenuItems = [...menuItems];

  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      <ul className="flex gap-7">
        {updatedMenuItems?.map((menu, index) => (
          <li key={index}>
            <Link to={menu} className="font-medium capitalize text-secondary">
              {menu === "/recipes" ? "Recipes" : menu}
            </Link>
          </li>
        ))}
      </ul>

      {/* buttons */}
      <ul className="flex gap-4 items-center font-medium">
        <li>
          <button className="text-secondary px-4 py-2 rounded border">Log In</button>
        </li>
        <li>
          <button className="text-secondary px-4 py-2 rounded border">Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNav;
