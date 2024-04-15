import React from "react";
// images
import grocery from "../assets/Untitled1.png";
import mobile from "../assets/Untitled2.png";
import fashion from "../assets/Untitled3.png";
import electronics from "../assets/4.png";
import home from "../assets/category5.jpg";
import application from "../assets/category6.jpg";
import travel from "../assets/Untitled4.png";
import beauty from "../assets/Untitled5.png";
import twoWheelers from "../assets/Untitled6.png";

import { Dropdown, ButtonToolbar } from "rsuite";

const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props}>
    <Dropdown.Item>New File</Dropdown.Item>
    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
    <Dropdown.Item>Download As...</Dropdown.Item>
    <Dropdown.Item>Export PDF</Dropdown.Item>
    <Dropdown.Item>Export HTML</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>About</Dropdown.Item>
  </Dropdown>
);

export const DropdownNavbar = () => {
  return (
    <>
      <div className="border bg-white flex justify-center gap-7 mx-6 mt-2">
        <div className="flex flex-col items-center text-center">
          <div>
            <img src={grocery} alt="Grocery" />
          </div>
          <p className="text-md mt-2 font-bold text-black">Grocery</p>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={mobile} alt="mobiles" />
          </div>
          <p className="text-md mt-2 font-bold text-black">Mobiles</p>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={fashion} alt="Fashion" />
          </div>
          <ButtonToolbar className="text-center">
            <CustomDropdown title="Fashion" trigger="hover" />
          </ButtonToolbar>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={electronics} alt="electronics" />
          </div>
          <ButtonToolbar>
            <CustomDropdown title="Electronics" trigger="hover" />
          </ButtonToolbar>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={home} alt="home" />
          </div>
          <ButtonToolbar>
            <CustomDropdown title="Home & Furniture" trigger="hover" />
          </ButtonToolbar>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={application} alt="application" />
          </div>
          <p className="text-md mt-2 font-bold text-black">Appliances</p>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={travel} alt="travel" />
          </div>
          <p className="text-md mt-2 font-bold text-black">Travel</p>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={beauty} alt="beauty" />
          </div>
          <ButtonToolbar>
            <CustomDropdown title="Beauty, Toys & More" trigger="hover" />
          </ButtonToolbar>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={twoWheelers} alt="twoWheelers" />
          </div>
          <ButtonToolbar>
            <CustomDropdown title="Two Wheelers" trigger="hover" />
          </ButtonToolbar>
        </div>
      </div>
    </>
  );
};
