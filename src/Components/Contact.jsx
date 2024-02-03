import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='contact'>
    return (
      <>
        <div>
          <h2 className="text-light text-center mb-5">Contact Form</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <form
              style={{ width: "500px" }}
              className="mb-5"
            >
              <p>
                <lable>Name:</lable>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </p>
              <p>
                <lable>Email:</lable>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your E-mail Address"
                />
              </p>
              <p>
                <lable>Mobile:</lable>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Mobile Number"
                />
              </p>
              <p>
                <input type="submit" className="form-control btn btn-primary" />
              </p>
            </form>
          </div>
        </div>
      </>
    );
    </div>
    </>
  )
}

export default Contact