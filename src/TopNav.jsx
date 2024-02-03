import React, { useState } from "react";
import pic from "./Images/logo1.jpg";

const TopNav = () => {
  //Styles
  const topNav = {
    color: "#ffff",
  };

  const stickyNav = {
    position: "fixed",
    backgroundColor: "rgba(27, 190, 68, 0.8)",
    opacity: "1",

    borderTopRightRadius: "25px",
    borderBottomRightRadius: "25px",
  };

  const items = {
    color: "#ffff",
    fontWeight: "500",
    padding: "10px 20px",
    "::hover": {
      color: "red",
    },
  };

  

  const Experience = () => {
    //Styles
    const whiteText = {
      color: "#ffff",
    };
    return (
      <>
        <div id="experience" style={whiteText}>
          <h1 className="text-center">Yuvaraj</h1>
        </div>
      </>
    );
  };



  const Contact = () => {
    const [data, setData] = useState({});
    const handleSubmit = (e) => {};


  };


};

export default TopNav;
