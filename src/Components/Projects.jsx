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
      textDecoration:"none"
    };

    return (
      <>
        <div id="projects" style={whiteText}>
          <h1 className="text-center">Projects</h1>
          <div className="" style={projsDiv}>
            <div className="" style={projDiv}>
              <h5>FD Calculator</h5>
            </div>
            <div className="" style={projDiv}>
              <h5>BMI Calculators</h5>
              <p>Calculate your BMI</p>
            </div>
            <div className="" style={projDiv}>
              <h5>Simple Interest Caluculator</h5>
              <p>
                Calculate simple interest on your loans and saving schemes
                investments
              </p>
            </div>
            <div className="" style={projDiv}>
              <h5>EMI Caluculator</h5>
              <p>
                Calculate EMI on your loans – home loan, car loan or personal
                loan
              </p>
            </div>
            <div className="" style={projDiv}>
              <h5>Degree to Farenheit</h5>
              <p>Convert the temperatire from degree celcious to fareh=nheit</p>
            </div>
            <div className="" style={projDiv}>
              <a style={projDiv} href='https://y-to-do-list.netlify.app' target='blank'>
              <h5>To Do List</h5>
              <p>We can add the item, also we can edit and delete</p>
              </a>
            </div>
            <div className="" style={projDiv}>
              <a style={projDiv} href='https://restaurant-menu-lists-js.netlify.app' target='blank'>
              <h5>Restaurant Menus</h5>
              <p>Dispaly the Restaurant Menus and filtered by veg or non veg</p>
              </a>
            </div>
            <div className="" style={projDiv}>
             <a style={projDiv} href='https://y-kart.netlify.app' target='blank'>
             <h5>Online Shopping Website</h5>
              <p>
                Developed online shopping website, by using HTML, CSS, Bootstrap and React JS
              </p>
             </a>
            </div>
            <div className="" style={projDiv}>
             <a style={projDiv} href='https://tecengg.netlify.app' target='blank'>
             <h5>Company Website</h5>
              <p>
                Developed techSep compnay website, by using HTML, CSS, Bootstrap and React JS
              </p>
             </a>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Projects