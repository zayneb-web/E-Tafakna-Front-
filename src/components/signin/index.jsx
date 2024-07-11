import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/review/google.png";
import img2 from "../../assets/images/review/tweet.png";
import api from "../../services/api";

function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("http://localhost:3216/api/auth/login", {
        email,
        password,
      });
      if (response.status === 200 && response.data) {
        console.log("Login successful");
        const { token, refreshToken } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        setMessage("");
        navigate("/");
      } else {
        console.log("Login failed");
        setMessage("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Login failed: " + error.response.data.message);
        setMessage("Wrong email or password. Please try again.");
      } else {
        console.log("Login failed: " + error.message);
        setMessage("Wrong email or password. Please try again.");
      }
    }
  };
  return (
    <section className="account-section">
      <div className="tf-container">
        <div className="row">
          <div className="wd-form-login">
            <h4>Log In</h4>
            <form action="/" onSubmit={handleSubmit}>
              {message && (
                <p
                  style={{
                    color: message.includes("failed") ? "red" : "red",
                    fontWeight: "bold",
                    fontSize: "10 px",
                  }}
                >
                  {message}
                </p>
              )}
              <br />
              <div className="ip">
                <label>
                  Email address<span>*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="ip">
                <label>
                  Password<span>*</span>
                </label>
                <div className="inputs-group auth-pass-inputgroup">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input-form password-input"
                    placeholder="Password"
                    id="password-input"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                  <Link
                    className={`password-addon ${
                      showPass ? "icon-eye" : "icon-eye-off"
                    }`}
                    id="password-addon"
                    onClick={() => setShowPass(!showPass)}
                  />
                </div>
              </div>
              <div className="group-ant-choice">
                <div className="sub-ip">
                  <input type="checkbox" />
                  Remember me
                </div>
                <Link to="#" className="forgot">
                  Fogot password?
                </Link>
              </div>
              <p className="line-ip">
                <span>or sign up with</span>
              </p>
              <Link to="#" className="btn-social">
                Continue with Facebook
              </Link>
              <Link to="#" className="btn-social">
                <img src={img} alt="images" /> Continue with Google
              </Link>
              <Link to="#" className="btn-social">
                <img src={img2} alt="images" /> Continue with Twitter
              </Link>
              <button type="submit">Login</button>
              <div className="sign-up">
                Not registered yet? <Link to="/createaccount">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
