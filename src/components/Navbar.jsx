import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <AiOutlineSearch size={20} />
        <BsPersonCircle size={20} />
      </div>

      <div className="md:hidden">
        <GrMenu size={20} />
      </div>
    </div>
  );
};

export default Navbar;
