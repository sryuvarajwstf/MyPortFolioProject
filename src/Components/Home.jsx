import pic from "../logo.jpg";

const Home = () => {
  const fullDiv = {
    color: "#ffff",
  };

  const img = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  };

  return (
    <>
      <div>
        <div className="text-white mx-5"  style={{ display: "flex", justifyContent: "end" }}>
          <h4 className="mx-5 mt-4">
            <i
              class="fa fa-envelope"
              style={{ fontSize: "20px", color: "white" }}
            >
              {" "}
            </i>{" "}
            <a className="text-white" style={{textDecoration:"none"}} href="mailto:sryuvaraj99@gmail.com">sryuvaraj99@gmail.com</a>
          </h4>
          <h4 className="pt-1 mt-4">
            <i class="fa fa-phone" style={{ fontSize: "22px", color: "white" }}>
              {" "}
            </i>{" "}
            8220496965
          </h4>
        </div>
      </div>
      <div className="py-5" style={fullDiv}>
        <div className="text-center">
          <img
            style={img}
            src={pic}
            className="App-logo text-center my-4"
            alt="logo"
          />
        </div>
        <h1 className="text-center">Helloo.. I'm Yuvaraj S R</h1>
        <h2 className="text-center p-2">
          A Frontend Developer and Web Designer
        </h2>
      </div>
    </>
  );
};

export default Home;
