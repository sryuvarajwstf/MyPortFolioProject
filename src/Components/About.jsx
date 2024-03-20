import React from "react";

const About = () => {
  const iconSize = {
    padding: "0px 10px",
    fontSize: "30px",
    color:"rgb(20,23,55)"
  };
  return (
    <>
    <div id="about" className="bg-white" style={{padding:"100px 0px"}}>
    <h1 className="text-center py-4" style={{textDecoration:"underline",color:"rgb(20,23,55)"}}>About</h1>
    <div
        className="text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p className="" style={{ width: "550px",color:"rgb(20,23,55)" }}>
          Experienced Software developer in .Net as a Junior Developer and completed training in React
          JS, adept at crafting seamless user interfaces with a focus on
          performance and responsiveness. Passionate about leveraging
          cutting-edge technologies to deliver engaging web applications.
        </p>
      </div>
      <div className="text-center p-3">
        <a href="https://github.com/sryuvaraj?tab=repositories" target="_blank"><i style={iconSize} className="fa fa-github "></i></a>
        <a href="https://www.linkedin.com/in/yuvaraj-s-r/?trk=public-profile-join-page" target="_blank"><i style={iconSize} className="fa fa-linkedin-square"></i></a>
      </div>
    </div>
    </>
  );
};

export default About;
