import React from 'react'

const Projects = () => {
    //Styles
    const whiteText = {
      backgroundColor: "#ffff",
      margin: "50px 0px",
      padding: "50px 0px",
    };

    const projsDiv = {
      display: "flex",
      margin: "50px 0px",
      gap: "10px",
      justifyContent: "center",
      flexWrap: "wrap",
      backgroundColor: "#ffff",
    };

    const projDiv = {
      backgroundColor: "rgba(1, 4, 39, 0.92)",
      color: "#ffff",
      width: "250px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0.5px 0.5px 10px 1px black",
    };

    return (
      <>
        <div id="projects" style={whiteText}>
          <h1 className="text-center">Projects</h1>
          <div className="" style={projsDiv}>
            <div className="" style={projDiv}>
              <h6>FD Calculator</h6>
            </div>
            <div className="" style={projDiv}>
              <h6>BMI Calculators</h6>
              <p>Calculate your BMI</p>
            </div>
            <div className="" style={projDiv}>
              <h6>Simple Interest Caluculator</h6>
              <p>
                Calculate simple interest on your loans and saving schemes
                investments
              </p>
            </div>
            <div className="" style={projDiv}>
              <h6>EMI Caluculator</h6>
              <p>
                Calculate EMI on your loans – home loan, car loan or personal
                loan
              </p>
            </div>
            <div className="" style={projDiv}>
              <h6>Degree to Farenheit</h6>
              <p>Convert the temperatire from degree celcious to fareh=nheit</p>
            </div>
            <div className="" style={projDiv}>
              <h6>To Do List</h6>
              <p>We can add the item, also we can edit and delete</p>
            </div>
            <div className="" style={projDiv}>
              <h6>Restaurant Menus</h6>
              <p>Dispaly the Restaurant Menus and filtered by veg or non veg</p>
            </div>
            <div className="" style={projDiv}>
              <h6>Online Shopping Design</h6>
              <p>
                Designed online shopping website, by using HTML, CSS, Bootstrap
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Projects