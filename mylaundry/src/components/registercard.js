import React from "react";
import "./registercard.css";
import { useHistory } from "react-router-dom";

function Registercard() {
  const history = useHistory();
  function signinsub() {
    console.log("Hello");
    history.push("/");
  }
  function createRegister() {
    console.log("Hello");
    history.push("/createorder");
  }

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-sm-12 py-5 reg">
            <p class="mainhh1">Laundry Service</p>
            <p class="doorstep1">Doorstep Wash & Dryclean Service</p>
            <p class="haveacc1">Already Have Account</p>
            <button class="btn regbtn1" onClick={signinsub}>
              Sign In
            </button>
          </div>
          <div class="col-lg-8 col-sm-12 py-5 sig">
            <p class="mainh2">Register</p>
            <form action="">
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Name"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="email"
                      class="inputform form-control"
                      placeholder="Email"
                      name="pwd"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Phone"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="password"
                      class="inputform form-control"
                      id="pwd"
                      placeholder="State"
                      name="pwd"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="District"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Address"
                      name="pwd"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Pincode"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="password"
                      class="inputform form-control"
                      placeholder="Password"
                      name="pwd"
                    />
                  </div>
                </div>
              </div>

              <p class="forgot">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="check1"
                  name="option1"
                  value="something"
                />
                I agree to Terms & conditions receiving marketing and
                promotional materials
              </p>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn mainbut"
                  onClick={createRegister}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registercard;
