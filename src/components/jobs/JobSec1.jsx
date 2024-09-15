import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SortBuy from "../dropdown/SortBuy";

JobSec1.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Company: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      budgetmin: PropTypes.number.isRequired,
      budgetmax: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      jobType: PropTypes.oneOf(['Full-time', 'Part-time', 'Contract', 'Freelance','Internship']).isRequired,
      experienceLevel: PropTypes.oneOf(['Junior', 'Mid', 'Senior']).isRequired,
      img: PropTypes.string,
      time: PropTypes.string
    })
  ).isRequired
};

function JobSec1({ data = [] }) {
  return (
    <section className="inner-jobs-section">
      <div className="tf-container">
        <div className="row">
          <Tabs className="col-lg-12 tf-tab">
            <div className="wd-meta-select-job">
              <div className="wd-findjob-filer">
                <div className="group-select-display">
                  <TabList className="inner menu-tab">
                    <Tab className="btn-display active">
                      {/* SVG icons here */}
                    </Tab>
                    <Tab className="btn-display">
                      {/* SVG icons here */}
                    </Tab>
                  </TabList>
                  <p className="nofi-job">
                    <span>{data.length}</span> jobs recommended for you
                  </p>
                </div>
                <SortBuy />
              </div>
            </div>
            <div className="content-tab">
              <TabPanel className="inner">
                {data.slice(0, 9).map((job) => (
                  <div key={job.id} className="features-job style-3">
                    <div className="inner-box">
                      <div className="company">
                        <div className="logo-company">
                          <img src={job.img || 'default-image.png'} />
                        </div>
                        <div className="box-content">
                          <h4>
                            <Link to={`/jobsingle_v1/${job.id}`}>{job.title}</Link>
                          </h4>
                          <div className="star">
                            {[...Array(5)].map((_, index) => (
                              <span key={index} className="icon-star-full"></span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <ul className="info">
                        <li>
                          <span className="icon-map-pin"></span>
                          {job.location}
                        </li>
                        <li>{job.time || 'N/A'}</li>
                      </ul>
                      <div className="category">
                        <ul className="job-tag">
                          <li>
                            <Link to="#">{job.jobType}</Link>
                          </li>
                          <li>
                            <Link to="#">{job.experienceLevel}</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="salary">
                        <span className="icon-dolar1"></span>
                        <p>
                          {job.budgetmin} - {job.budgetmax} <span className="year">/year</span>
                        </p>
                      </div>
                      <div className="group-btn">
                        <span className="icon-heart"></span>
                        <Link to={`/apply/${job.id}`}>
                          <button>Apply</button>
                        </Link>
                      </div>
                    </div>
                    <Link
                      to={`/jobsingle_v1/${job.id}`}
                      className="jobtex-link-item"
                      tabIndex="0"
                    ></Link>
                  </div>
                ))}

                <ul className="pagination-job padding">
                  <li>
                    <Link to="#">
                      <i className="icon-keyboard_arrow_left"></i>
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">...</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-keyboard_arrow_right"></i>
                    </Link>
                  </li>
                </ul>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default JobSec1;
