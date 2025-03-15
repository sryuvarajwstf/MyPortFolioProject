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
        2+years experienced and result-oriented Frontend Developer with proven experience at wasserstoff
is helps to maintain a better code base for reusability. Good in UI implement, Passionate about
learning new technologies and development with a desire to apply skills on a larger development
team.
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
