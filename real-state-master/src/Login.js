
import React from "react";
import "./Login.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div class="loginbgcontainer1">
      <section className="logincontainer1 loginforms1">
        <div className="loginform1 register">
          <div className="loginform-content1">
            <header className="loginHeadername1">SignIn </header>
            <form action="/">
              <div className="loginfield1 logininput-field1">
                <input type="email" placeholder="Email" className="input1" />
              </div>
              <div className="loginfield1 logininput-field1">
                <input
                  type="password"
                  placeholder="Password"
                  className="loginpassword1"
                />
              </div>
              <div className="loginform-link">
                <Link to="/forgot" className="loginforgot-pass">
                  Forgot password?
                </Link>
              </div>

              <div className="loginfield1 loginbutton-field1">
                <button>Login</button>
              </div>
            </form>
            <div className="loginform-link1">
              <span>
                <strong>
                  Don't have an account?{" "}
                  <Link class="loginspan1" to="/Register">
                    Signup
                  </Link>
                </strong>
              </span>
            </div>
          </div>
          <div className="loginline11">
            <div class="section3"></div>
            <p class="loginpara1">Or</p>
            <div class="section4"></div>
          </div>
          <div className="loginmedia-options11">
            <a href="/" className="loginfield1 loginfacebook1">
              <FaFacebookF className="logingicons12"></FaFacebookF>
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="loginmedia-options11">
            <a href="/" className="loginfield1 loginfacebook1">
              <FcGoogle className="logingicons12"></FcGoogle>
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
