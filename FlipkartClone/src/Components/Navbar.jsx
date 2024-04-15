import React from "react";
// Images
import flipkartLogo from "../assets/flipkartLogo1.svg";
import plus from "../assets/plus1.svg";
import orders from "../assets/orders1.svg";
import love from "../assets/love1.svg";
import rewards from "../assets/rewards1.svg";
import card from "../assets/creditCard1.svg";
import addVertise from "../assets/Addvertise1.svg"
// icons
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { PiStorefront } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

// rsuitejs.com
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "../index.css";

const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props} className="custom-dropdown">
    <div className="newUser">
      <Dropdown.Item className=" font-bold custom-dropdown-item">
        New customer?
      </Dropdown.Item>
      <p className="signup" href="">
        Signup
      </p>
    </div>
    <hr />

    <div className="newUser">
      <FaRegUserCircle className="size-5" />
      <Dropdown.Item className="custom-dropdown-item">My Profile</Dropdown.Item>
    </div>

    <div className="newUser">
      <img src={plus} alt="plus" />
      <Dropdown.Item className="custom-dropdown-item">
        Flipkart Plus Zone
      </Dropdown.Item>
    </div>
    <div className="newUser">
      <img src={orders} alt="orders" />
      <Dropdown.Item className="custom-dropdown-item">Orders</Dropdown.Item>
    </div>
    <div className="newUser">
      <img src={love} alt="Wishlist" />
      <Dropdown.Item className="custom-dropdown-item">Wishlist</Dropdown.Item>
    </div>
    <div className="newUser">
      <img src={rewards} alt="Rewards" />
      <Dropdown.Item className="custom-dropdown-item">Rewards</Dropdown.Item>
    </div>
    <div className="newUser">
      <img src={card} alt="Gift Card" />
      <Dropdown.Item className="custom-dropdown-item">Gift Cards</Dropdown.Item>
    </div>
  </Dropdown>
);

const CustomDropdown2 = ({ ...props }) => (
  <Dropdown {...props}
  className="custom-dropdown2"
  >
    <div className="newUser">
    <IoMdNotificationsOutline/>
    <Dropdown.Item>Notification Preferences</Dropdown.Item>
    </div>
    <div className="newUser">
    <RiCustomerServiceLine/>
    <Dropdown.Item>24x7 Customer Care</Dropdown.Item>
    </div>
    <div className="newUser">
    <img src={addVertise} alt="Advertise" />
    <Dropdown.Item>Advertise</Dropdown.Item>
    </div>
    <div className="newUser">
    <PiDownloadSimpleLight/>
    <Dropdown.Item>Download App</Dropdown.Item> 
    </div>
  </Dropdown>
);

export const Navbar = () => {
  return (
    <>
      <nav id="navbar" className="flex justify-evenly py-4 bg-white top-0">
        <div>
          <img src={flipkartLogo} alt="Flipkart Logo" />
        </div>
        <div className="flex text-center items-center pl-2 bg-[#F0F5FF] rounded-md w-fit">
          {" "}
          <CiSearch className="size-6" />{" "}
          <input
            className="w-[46em] h-[100%] outline-none pl-2 bg-[#F0F5FF] text-lg rounded-md"
            type="search"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        <div className="flex items-center text-center gap-8">
          <div className=" flex items-center text-center h-[100%] hover:bg-[#2A55E5] rounded-md">
            <FaRegUserCircle className="size-5" id="user" />
            <CustomDropdown title="Login" trigger="hover" />
          </div>

          <div className="flex text-center items-center gap-2 h-[100%]">
            {" "}
            <BsCart3 className="size-6" />{" "}
            <p className="font-semibold text-md">Cart</p>{" "}
          </div>
          <div className="flex items-center text-center gap-2 h-[100%]">
            {" "}
            <PiStorefront className="size-6" />{" "}
            <p className="font-semibold text-md">Become a Seller</p>
          </div>
          <div className=" flex text-center items-center h-[100%] threeDot">
            {/* <BsThreeDotsVertical className="size-5" />{" "} */}
            {/* <div className="threeDot"> */}
              <CustomDropdown2 title={<BsThreeDotsVertical className="size-5 text-black " />} trigger="hover" />
            {/* </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};
