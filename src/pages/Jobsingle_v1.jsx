import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header2 from "../components/header/Header2";

function Jobsingle_v1() {
  const { id } = useParams(); // Get job ID from URL params
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);
  const [toggle, setToggle] = useState({ key: "", status: false });
  const [isShowMobile, setShowMobile] = useState(false);
  const [job, setJob] = useState(null);

  // Handle toggle for collapsible sections
  const handleToggle = (key) => {
    setToggle((prevToggle) => ({
      key: prevToggle.key === key ? "" : key,
      status: prevToggle.key !== key
    }));
  };

  // Handle mobile menu visibility
  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    getMobile.classList.toggle("modal-menu--open", !isShowMobile);
  };

  useEffect(() => {
    if (progressRef?.current) {
      const offsetHeight = progressRef?.current?.offsetTop;
      setTargetHeight(offsetHeight);
    }
  }, [progressRef]);

  // Fetch job data when the component mounts
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:3216/api/job/getById/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJob();
  }, [id]);

  // Loading state while fetching data
  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="menu-mobile-popup">
        {/* Mobile menu code */}
      </div>
      <Header2 clname="actJob2" handleMobile={handleMobile} />

      <section className="form-sticky fixed-space">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wd-job-author2">
                <div className="content-left">
                  <div className="thumb">
                    <img src={job.companyLogo || 'default-logo.png'} alt="logo" />
                  </div>
                  <div className="content">
                    <Link to="#" className="category">
                      {job.Company || 'Company Name'}
                    </Link>
                    <h6>
                      <Link to="#">
                        {job.title || 'Job location'} <span className="icon-bolt"></span>
                      </Link>
                    </h6>
                    <ul className="job-info">
                   
                      <li>
                        <span className="icon-map-pin"></span>
                        <span>{job.location || 'Location'}</span>
                      </li>
                      <li>
                        <span className="icon-calendar"></span>
                        <span>{job.postedDate || 'Posted Date'}</span>
                      </li>
                    </ul>
                    <ul className="tags">
                      <li>
                        <Link to="#">{job.jobType || 'Job Type'}</Link>
                      </li>
                      <li>
                        <Link to="#">{job.experienceLevel || 'experienceLevel'}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-right">
                  <div className="top">
                    <Link to={`/apply/${job.id}`} className="btn btn-popup">
                      <i className="icon-send" />
                      Apply Now
                    </Link>
                  </div>
                  <div className="bottom">
                    <div className="gr-rating">
                      <p>{job.applicationDeadline || 'Deadline'} days left to apply</p>
                      <ul className="list-star">
                        {[...Array(job.rating || 0)].map((_, index) => (
                          <li key={index} className="icon-star-full" />
                        ))}
                      </ul>
                    </div>
                    <div className="price">
                      <span className="icon-dollar" />
                      <p>
                        {job.budgetmin || 'Min Salary'} - {job.budgetmax || 'Max Salary'} <span className="year">/year</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-jobs-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <Tabs className="job-article tf-tab single-job">
                <TabList className="menu-tab">
                  <Tab className="ct-tab">About</Tab>
                </TabList>
                <div className="content-tab">
                  <TabPanel className="inner-content animation-tab">
                    <h5>Full Job Description</h5>
                    <p>{job.description || 'Job Description'}</p>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>Qualifications</h5>
                    <p>{job.qualifications || 'Job Qualifications'}</p>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
            <div className="col-lg-4">
              <div className="cv-form-details po-sticky job-sg single-stick">
                <ul className="list-infor">
                  <li>
                    <div className="category">Website</div>
                    <div className="detail">
                      <Link to={job.Company || '#'}>{job.Company || 'Website Name'}</Link>
                    </div>
                  </li>
                </ul>

                <div className="wd-social d-flex aln-center">
                  <ul className="list-social d-flex aln-center">
                    {job.socialLinks?.map((link, index) => (
                      <li key={index}>
                        <Link to={link.url}>
                          <i className={link.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="form-job-single">
                  <h6>Contact Us</h6>
                  <form action="post">
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message..."></textarea>
                    <button>Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default Jobsingle_v1;
