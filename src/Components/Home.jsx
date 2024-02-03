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
            A Software Developer and Web Designer
          </h2>
        </div>
      </>
    );
  };

  export default Home