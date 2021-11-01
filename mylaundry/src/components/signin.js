import React from "react";
import "./mainhome.css";
import { useHistory } from "react-router-dom";

function Signin() {
  const history = useHistory();
  function registersub() {
    console.log("Hello");
    history.push("/register");
  }
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-sm-12 py-5 reg">
          <p class="mainh1">Laundry Service</p>
          <p class="doorstep">Doorstep Wash & Dryclean Service</p>
          <p class="haveacc">Don't have an Account?</p>
          <button class="btn regbtn" onClick={registersub}>
            Register
          </button>
        </div>
        <div class="col-lg-6 col-sm-12 py-5 sig">
          <p class="mainh2">Sign in</p>
          <form action="">
            <div class="form-group">
              <input
                type="text"
                class="inputform form-control"
                id="phone"
                placeholder="Mobile/Email"
                name="phone"
                pattern="[7-9]{1}[0-9]{9}"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="inputform form-control"
                id="pwd"
                placeholder="Password"
                name="pwd"
              />
            </div>

            <p class="forgot">Forgot password?</p>
            <div class="text-center">
              <button type="submit" class="btn mainbut">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
