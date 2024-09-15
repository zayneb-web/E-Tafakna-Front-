import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button2 from "../button/Button2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Job07() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3216/api/job/getAll");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        console.log("Fetched jobs data:", data); // Debug: Check the fetched data

        // Check if data is an array. If your API wraps jobs in an object, adjust accordingly.
        if (Array.isArray(data)) {
          setJobs(data);
        } else if (data.jobs && Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="job-section">
      <Tabs className="wrap-testimonials style-1 over-flow-hidden tf-tab">
        <div className="tf-container">
          <div className="tf-title style-3 margin" style={{ marginTop: "80px" }}>
            <div className="group-title">
              <h2>Featured Jobs</h2>
              <p>Find the right career opportunity for you</p>
            </div>
            <TabList className="menu-tab">
              <Tab className="user-tag">UI UX Design</Tab>
              <Tab className="user-tag">Project Manager</Tab>
              <Tab className="user-tag">Sales & Marketing</Tab>
              <Tab className="user-tag">Accounting</Tab>
              <Tab className="user-tag">Other</Tab>
            </TabList>
          </div>
          <div className="content-tab" style={{ marginTop: "50px" }}>
            <TabPanel className="row wow fadeInUp animation-tab job-tab-item">
              {jobs.slice(0, 9).map((job) => (
                <div key={job.id} className="col-lg-4">
                  <div className="features-job">
                    <div className="job-archive-header">
                      <div className="inner-box">
                        <div className="logo-company">
                          {/* Provide a fallback alt text if Company is missing */}
                          <img src={job.img || 'default-image.png'} />
                        </div>
                        <div className="box-content">
                          <h4>
                            <Link to={`/jobsingle_v1/${job.id}`}>{job.title || "No Title"}</Link>
                          </h4>
                          <p>
                            <Link to={`/jobsingle_v1/${job.id}`}>{job.Company }</Link>
                          </p>
                          <ul>
                            <li>
                              <span className="icon-map-pin"></span>
                              &nbsp;
                              {job.location || "Location Not Provided"}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
                              {job.time || "N/A"}
                            </li>
                          </ul>
                          <span className="icon-heart"></span>
                        </div>
                      </div>
                    </div>
                    <div className="job-archive-footer">
                      <div className="job-footer-left">
                        <ul className="job-tag">
                          {/* Ensure tags exist and are an array */}
                          {(job.tags || []).map((tag, index) => (
                            <li key={index}>
                              <Link to="#">{tag}</Link>
                            </li>
                          ))}
                          {/* Optionally add jobType and experienceLevel as tags */}
                          {job.jobType && (
                            <li>
                              <Link to="#">{job.jobType}</Link>
                            </li>
                          )}
                          {job.experienceLevel && (
                            <li>
                              <Link to="#">{job.experienceLevel}</Link>
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="job-footer-right">
                        <div className="price">
                          <span className="icon-dolar1"></span>
                          <p>
                            {job.budgetmin !== undefined && job.budgetmax !== undefined
                              ? `${job.budgetmin} - ${job.budgetmax}`
                              : "N/A"}{" "}
                            <span className="year">/year</span>
                          </p>
                        </div>
                        <p className="days">{job.applyBefore || "N/A"}</p>
                      </div>
                    </div>
                    <Link
                      to={`/jobsingle_v1/${job.id}`}
                      className="jobtex-link-item"
                      tabIndex="0"
                    ></Link>
                  </div>
                </div>
              ))}
              {/* Show a message if no jobs are available */}
              {jobs.length === 0 && (
                <div className="col-md-12">
                  <p>No jobs available at the moment.</p>
                </div>
              )}
              <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default Job07;
