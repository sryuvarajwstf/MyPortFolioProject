import React from 'react'
import { useState } from 'react';

const Nav = () => {
    const topNav = {
        color: "#ffff",
      };
    
      const stickyNav = {
        position: "fixed",
        backgroundColor: "rgba(27, 190, 68, 0.8)",
        opacity: "1",
        padding:"5px",
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px",
      };
    
      const items = {
        color: "#ffff",
        fontWeight: "500",
        padding: "10px 20px",
        "::hover": {
          color: "red",
        },
      };

      const [showMobMenus, setShowMonNavMenus] = useState(false)
    
  return (
    <>
      <div style={stickyNav}>
        {" "}
        <div className=" row" style={topNav}>
          <nav className="navbar navbar-expand-lg">
            <div className="">
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setShowMonNavMenus(!showMobMenus)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a style={items} className="nav-link " href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={items} className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={items} className="nav-link" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={items} className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={items} className="nav-link" href="#resume">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={items} className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className={`${showMobMenus ? "visible" : "visually-hidden"} lg:visible-hidden`} id="">
                <ul className="navbar-nav">
                  <li className="nav-item" onClick={() => setShowMonNavMenus(false)}>
                    <a style={items} className="nav-link " href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => setShowMonNavMenus(false)}>
                    <a style={items} className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => setShowMonNavMenus(false)}>
                    <a style={items} className="nav-link" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => setShowMonNavMenus(false)}>
                    <a style={items} className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => setShowMonNavMenus(false)}>
                    <a style={items} className="nav-link" href="#resume">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => setShowMonNavMenus(false)}>
                    <a style={items} className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Nav