import React, { useState } from "react";
import PropTypes from "prop-types";

import logo from "../../assets/images/logo.png";
import avt from "../../assets/images/user/avatar/image-01.jpg";
import { Link, NavLink } from "react-router-dom";

HeaderHome2.propTypes = {};

function HeaderHome2({ clname = "", handleMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header" className="header header-default">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src={logo}
                      alt="Image"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-ct-center st-1">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li
                        className={`menu-item menu-item-has-children ${clname}`}
                      >
                        <Link to="#">Home </Link>
                        <div className="menu-bar">
                          <ul className="sub-menu-bar">
                            <li className="menu-item">
                              <NavLink to="/">Home</NavLink>
                            </li>
                          
                          </ul>
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="/joblist_v1">Find jobs </Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Jobs Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/joblist_v1">List Layout</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/jobsingle_v1">
                              Jobs Single - V1
                            </NavLink>
                          </li>
                         
                        </ul>
                      </li>

                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Employers</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Employers Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                             
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                            
                            </ul>
                          </li>
                          
                          <li className="nav-sub">
                            <NavLink to="/employersingle_v2">
                              Employers Single - V2
                            </NavLink>
                          </li>

                          <li className="nav-sub">
                            <NavLink to="/employerreview">
                              Employers Reviews
                            </NavLink>
                          </li>
                          <li className="nav-sub">
                            <NavLink to="/employernotfound">
                              Employers Not Found
                            </NavLink>
                          </li>
                         
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#">Candidates</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Candidates Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                            
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                             
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v6">
                                  No Available - V1
                                </NavLink>
                              </li>
                             
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <Link to="#">
                              Sample CV
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/samplecv">Sample CV</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvdetails">
                                  CV Details
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvslidebar">
                                  Sample CV Sidebar
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                         
                          <li className="nav-sub">
                            <NavLink to="/candidatesingle_v2">
                              Candidate Single - V2
                            </NavLink>
                          </li>

                          <li className="nav-sub">
                            <NavLink to="/candidatedashboard">
                              Candidates Dashboard
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-ct-right st-1">
                <div className="header-customize-item help">
                  <Link to="/termsofuse">
                    <span className="icon-help-circle"></span>
                  </Link>
                </div>
                <div className="header-customize-item bell">
                  <span className="icon-bell"></span>
                  <div className="sub-notification">
                    <div className="sub-notification-heading">
                      <div className="sub-notification-title">Notification</div>
                      <span>5 New</span>
                    </div>
                    <div className="sub-notification-content">
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job{" "}
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                    </div>
                    <div className="sub-notification-button">
                      <Link to="#">Read All</Link>
                    </div>
                  </div>
                </div>
                <div className="header-customize-item account">
                  <img src={avt} alt="" />
                  <div className="name">Candidates</div>
                </div>
                <div className="header-customize-item button">
                  <Link to="/">Upload Resume</Link>
                </div>
              </div>
              <div className="nav-filter" onClick={handleMobile}>
                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome2;
