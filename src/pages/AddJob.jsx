import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import Header2 from "../components/header/Header2";

function AddJob() {
  const [formData, setFormData] = useState({
    Company: "",
    title: "",
    description: "",
    budgetmin: 0,
    budgetmax: 0,
    location: "",
    jobType: "FULL_TIME",
    experienceLevel: "ENTRY",
    Qualifications: "",
  });

  const [selectedTab, setSelectedTab] = useState(0); // State to track the selected tab
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwtToken");

    if (!token) {
      alert("No token found! Please log in.");
      return;
    }

    const formDataWithNumbers = {
      ...formData,
      budgetmin: parseFloat(formData.budgetmin),
      budgetmax: parseFloat(formData.budgetmax),
    };

    try {
      const response = await fetch("http://localhost:3216/api/job/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formDataWithNumbers),
      });

      if (response.ok) {
        const newJob = await response.json();
        alert("Job created successfully!");
        navigate("/joblist_v1"); // Redirect or update UI as needed
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "An unexpected error occurred.";
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error while creating job:", error);
      alert("An error occurred while creating the job. Please check the console for more details.");
    }
  };

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Header2 />
      <section className="account-section">
        <div className="tf-container">
          <div className="row">
            <Tabs className="wd-form-login tf-tab" onSelect={handleTabSelect}>
              <h4>Choose your need!</h4>
              <TabList className="menu-tab justify-content-center">
                <Tab className="ct-tab">Employer</Tab>
              </TabList>
              <div className="content-tab">
                <TabPanel className="inner animation-tab">
                  {selectedTab === 0 && ( 
                    <form onSubmit={handleSubmit}>
                       <div className="ip">
                        <label>
                          Company<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="Company"
                          placeholder="Company name"
                          value={formData.Company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="ip">
                        <label>
                          Title of the job<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Title of the job"
                          value={formData.title}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="ip">
                        <label>
                          Description of the job<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="description"
                          placeholder="Description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="ip">
                        <label>
                          Max Salary<span>*</span>
                        </label>
                        <input
                          type="number"
                          name="budgetmax"
                          placeholder="Max Salary"
                          value={formData.budgetmax}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="ip">
                        <label>
                          Min Salary<span>*</span>
                        </label>
                        <input
                          type="number"
                          name="budgetmin"
                          placeholder="Min Salary"
                          value={formData.budgetmin}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="ip">
                        <label>
                          Location<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="ip">
                        <label>
                          Experience Level<span>*</span>
                        </label>
                        <select
                          name="experienceLevel"
                          value={formData.experienceLevel}
                          onChange={handleChange}
                          required
                        >
                          <option value="ENTRY">Entry</option>
                          <option value="MID">Mid</option>
                          <option value="SENIOR">Senior</option>
                        </select>
                      </div>
                      <div className="ip">
                        <label>
                          Job Type<span>*</span>
                        </label>
                        <select
                          name="jobType"
                          value={formData.jobType}
                          onChange={handleChange}
                          required
                        >
                          <option value="FULL_TIME">Full Time</option>
                          <option value="PART_TIME">Part Time</option>
                          <option value="CONTRACT">Contract</option>
                          <option value="INTERNSHIP">Internship</option>
                          <option value="REMOTE">Remote</option>
                        </select>
                      </div>
                      <div className="ip">
                        <label>
                          Qualifications<span>*</span>
                        </label>
                        <textarea
                          type="text"
                          name="Qualifications"
                          placeholder="Please write your qualifications for the candidate ! "
                          value={formData.Qualifications}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="group-ant-choice st">
                        <div className="sub-ip">
                          <input type="checkbox" required />I agree to the
                          <Link to="/termsofuse"> Terms of User</Link>
                        </div>
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  )}
                </TabPanel>
               
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </>
  );
}

export default AddJob;
