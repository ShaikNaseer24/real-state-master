import React from "react";
import "./Register.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function SignupForm() {
  return (
    <div class="bgcontainer1">
      <section className="container1 forms1">
        <div className="form1 register">
          <div className="form-content1">
            <header className="Headername1">SignUp Now</header>
            <form action="/">
              <div className="field1 input-field1">
                <input type="email" placeholder="Email" className="input1" />
              </div>
              <div className="field1 input-field1">
                <input
                  type="password"
                  placeholder="Password"
                  className="password1"
                />

                {/* <i className="bx bx-hide eye-icon"></i> */}
              </div>
              <div className="field1 input-field1">
                <input
                  type="confirmpassword"
                  placeholder="ConfirmPassword"
                  className="confirmpassword"
                />
              </div>
              <div className="field1 button-field1">
                <button>Register</button>
              </div>
            </form>
            <div className="form-link1">
              <span><strong>
                Already have an account?{" "}
                <Link class="span1" to="/Login">
                  SignIn
                </Link>
                </strong></span>
            </div>
          </div>
          <div className="line11">
            <div class="section3">
            </div>
            <p class="para1">Or</p>
            <div class="section4">    
            </div>
          </div>
          <div className="media-options11">
            <a href="/" className="field1 facebook1">
              <FaFacebookF className="gicons12"></FaFacebookF>
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options11">
            <a href="/" className="field1 facebook1">
              <FcGoogle className="gicons12"></FcGoogle>
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupForm;
