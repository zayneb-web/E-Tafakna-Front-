import React, { useState } from 'react';
import { sendProposalToJob } from '../services/api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header2 from './header/Header2';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Gotop from "../components/gotop";
import Footer from "../components/footer";

const ProposalForm = () => {
  const { jobId } = useParams();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // State for handling file upload

  const [formData, setFormData] = useState({
    coverLetter: "",
    email: "",
    budgetmin: 0,
    budgetmax: 0,
    location: "",
    phone: 0,
    experienceLevel: "ENTRY",
    profileTitle:"",
    linkedin:"",
    github:"",
    date: "",
    cvFile:"" // Initialize the date field
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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");
  
    if (!token) {
      alert("No token found! Please log in.");
      return;
    }
  
    const formDataBla = new FormData();

    Object.keys(formData).forEach(key => {
      formDataBla.append(key, formData[key]);
    });
    
    if (selectedFile) {
      formDataBla.append('cvFile', selectedFile);
    }
    
   try{const response = await fetch(`http://localhost:3216/api/proposal/send/${jobId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formDataBla,
    });
    
      if (response.ok) {
        const result = await response.json();
        alert("Proposal submitted successfully!");
        navigate("/joblist_v1"); // Redirect or update UI as needed
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "An unexpected error occurred.";
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error while submitting proposal:", error);
      alert("An error occurred while submitting the proposal. Please check the console for more details.");
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
          <div className="row justify-content-center">
            <Tabs className="wd-form-login tf-tab" onSelect={handleTabSelect}>
              <h4>Apply</h4>
              <TabList className="menu-tab justify-content-center">
                <Tab className="ct-tab">Candidate</Tab>
              </TabList>
              <div className="content-tab">
                <TabPanel className="inner animation-tab">
                  <form onSubmit={handleSubmit}>
                    <div className="ip">
                      <label>
                        Email<span>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="candidate@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ip">
                      <label>
                        Phone<span>*</span>
                      </label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
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
                        placeholder="Your location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ip">
                      <label>
                        Min Budget<span>*</span>
                      </label>
                      <input
                        type="number"
                        name="budgetmin"
                        value={formData.budgetmin}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ip">
                      <label>
                        Max Budget<span>*</span>
                      </label>
                      <input
                        type="number"
                        name="budgetmax"
                        value={formData.budgetmax}
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
                        Date of disponibilty<span>*</span>
                      </label>
                      <input
                        type="datetime-local"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ip">
                      <label>
                        Cover Letter<span>*</span>
                      </label>
                      <textarea
                        name="coverLetter"
                        placeholder="Describe why would you join us ! "
                        value={formData.coverLetter}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ip">
                      <label>
                        CV File<span>*</span>
                      </label>
                      <input
                        type="file"
                        name="cvFile"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                    <div className="ip">
                      <label>
                        Linkedin<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={handleChange}
                        
                      />
                    </div>
                    <div className="ip">
                      <label>
                        Github<span>*</span>
                      </label>
                      <input
  type="text"
  name="github" // Ensure this matches with `formData.github`
  placeholder="https://github.com/username"
  value={formData.github}
  onChange={handleChange}
/>

                    </div>
                    <div className="group-ant-choice st">
                      <div className="sub-ip">
                        <input type="checkbox" required />
                        I agree to the
                        <Link to="/termsofuse"> Terms of Use</Link>
                      </div>
                    </div>
                    <button type="submit">Submit</button>
                  </form>
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
};

export default ProposalForm;
