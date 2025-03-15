import React from 'react'

const Nav = () => {
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
    
  return (
    <>
      <div style={stickyNav}>
        {" "}
        <div className="navbar-light row" style={topNav}>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="visually-hidden lg:visible collapse navbar-collapse" id="navbarNav">
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
            </div>
          </nav>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Nav