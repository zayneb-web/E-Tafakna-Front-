import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import api from "../../services/api";

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [showPass4, setShowPass4] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedTab, setSelectedTab] = useState("candidate");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedTab !== "candidate" && selectedTab !== "employer") {
      setMessage("Please select either Candidate or Employer");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    if (formData.password.length < 8) {
      setMessage("Password must be at least 8 characters long");
      return;
    }
    if (!validateEmail(formData.email)) {
      setMessage("Invalid email address");
      return;
    }
    try {
      const endpoint =
        selectedTab === "candidate"
          ? "http://localhost:3216/api/auth/register-condidate"
          : "http://localhost:3216/api/auth/register-employer";
      const response = await api.post(endpoint, {
        email: formData.email,
        password: formData.password,
      });
      if (response && response.data) {
        console.log("registration successful");
        const { token, refreshToken } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        setMessage("");
        navigate("/");
      } else {
        console.log("registration failed");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Registration failed: " + error.response.data.message);
      } else {
        console.log("Registration failed: " + error.message);
      }
    }
  };
  return (
    <section className="account-section">
      <div className="tf-container">
        <div className="row">
        <Tabs
            className="wd-form-login tf-tab"
            selectedTabClassName="selected"
            onSelect={(index) =>
              setSelectedTab(index === 0 ? "candidate" : "employer")
            }
          >
            <h4>Create Link free account</h4>
            <TabList className="menu-tab">
              <Tab
                className={`ct-tab ${selectedTab === "candidate" ? "selected" : ""}`}
              >
                <div onClick={() => setSelectedTab("candidate")}>
                  Candidate
                </div>
              </Tab>
              <Tab
                className={`ct-tab ${selectedTab === "employer" ? "selected" : ""}`}
              >
                <div onClick={() => setSelectedTab("employer")}>
                  Employer
                </div>
              </Tab>
            </TabList>
            <div className="content-tab">
              <TabPanel className="inner animation-tab">
                <form onSubmit={handleSubmit}>
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
                      name="email"
                      placeholder="Email"
                      value={formData.email}
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
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass(!showPass)}
                      />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={showPass2 ? "text" : "password"}
                        className="input-form password-input"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass2 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass2(!showPass2)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice st">
                    <div className="sub-ip">
                      <input type="checkbox" required />I agree to the
                      <Link to="/termsofuse"> Terms of User</Link>
                    </div>
                  </div>

                  <button type="submit">Register</button>
                  <div className="sign-up">
                    Already have an account?
                    <Link to="/login">&nbsp;Login Here</Link>
                  </div>
                </form>
              </TabPanel>
              <TabPanel className="inner animation-tab">
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
                <form onSubmit={handleSubmit}>
                  <div className="ip">
                    <label>
                      Email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
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
                        type={showPass3 ? "text" : "password"}
                        className="input-form password-input"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass3 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass3(!showPass3)}
                      />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={showPass4 ? "text" : "password"}
                        className="input-form password-input"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass4 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass4(!showPass4)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice st">
                    <div className="sub-ip">
                      <input type="checkbox" required />I agree to the
                      <Link to="/termsofuse"> Terms of User</Link>
                    </div>
                  </div>
                  <button type="submit">Register</button>
                  <div className="sign-up">
                    Already have an account?
                    <Link to="/login">&nbsp;Login Here</Link>
                  </div>
                </form>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
