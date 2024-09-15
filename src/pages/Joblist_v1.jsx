import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../components/breadcrumb";
import Header4 from "../components/header/Header4";
import JobSec1 from "../components/jobs/JobSec1";
import Footer from "../components/footer";
import FormSearch from "../components/formsearch";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import Header2 from "../components/header/Header2";

Joblist_v1.propTypes = {};

function Joblist_v1(props) {
  const [jobs, setJobs] = useState([]);
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3216/api/job/getAll");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        console.log("Fetched jobs data:", data); // Debug: Check the fetched data
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleToggle = (key) => {
    setToggle(prev => (prev.key === key ? { status: !prev.status } : { status: true, key }));
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  const refreshJobs = async () => {
    try {
      const response = await fetch("http://localhost:3216/api/job/getAll");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("Refreshed jobs data:", data); // Debug: Check the refreshed data
      setJobs(data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab">
              <Tab className="user-tag">Menu</Tab>
              <Tab className="user-tag">Categories</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                        <Collapse isOpened={toggle.key === "home"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "home" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v7">Home</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile current-item">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          Find jobs
                        </Link>
                        <Collapse isOpened={toggle.key === "job"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "job" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile current-item">
                              <Link to="/joblist_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v1">Jobs Single - V1</Link>
                            </li>
                          
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Employers
                        </Link>
                        <Collapse isOpened={toggle.key === "employers"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "employers" ? "block" : "none"
                              }`,
                            }}
                          >
                          
                            <li className="menu-item">
                              <Link to="/employers_v2">Grid Layout</Link>
                            </li>
                          
                            <li className="menu-item">
                              <Link to="/employersingle_v2">
                                Employers Single - V2
                              </Link>
                            </li>

                            <li className="menu-item">
                              <Link to="/employerreview">
                                Employers Reviews
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employernotfound">
                                Employers Not Found
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("candidate");
                          }}
                        >
                          Candidates
                        </Link>
                        <Collapse isOpened={toggle.key === "candidate"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "candidate" ? "block" : "none"
                              }`,
                            }}
                          >
                            
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v2">Grid Layout</Link>
                            </li>
                          
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v6">No Available V1</Link>
                            </li>
                           
                     
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidatesingle_v2">
                                Candidate Single - V2
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecv">Sample CV</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvslidebar">
                                Sample CV Sidebar
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvdetails">CV Details</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("blog");
                          }}
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("pages");
                          }}
                        >
                          Pages
                        </Link>
                        <Collapse isOpened={toggle.key === "pages"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "pages" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/aboutus">About Us</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/faqs">FAQS</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/termsofuse">Terms Of Use</Link>
                            </li>
                          
                            <li className="menu-item menu-item-mobile">
                              <Link to="/contactus">Contact Us</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>

              <TabPanel className="categories animation-tab">
                <div className="sub-categorie-mobile">
                  <ul className="pop-up">
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-1"></span>Design &
                        Creative
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-8"></span>Digital
                        Marketing
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-2"></span>Development &
                        IT
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-3"></span>Music & Audio
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-4"></span>Finance &
                        Accounting
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-5"></span>Programming &
                        Tech
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-6"></span>Video &
                        Animation
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-7"></span>Writing &
                        translation
                      </Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </div>
          </Tabs>

          <div className="header-customize-item button">
            <Link to="/">Upload Resume</Link>
          </div>

          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <Link to="tel:0123456678">001-1234-88888</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="#">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Header2 clname="actJob1" handleMobile={handleMobile} />
      <Breadcrumb title="Find Jobs" className="breadcrumb-section" />

      <FormSearch />

      <JobSec1 data={jobs} />
      <Footer />
      <Gotop />
    </>
  );
}

export default Joblist_v1;
