import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Gotop from "../components/gotop";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapSingle from "../components/map/MapSingle";
import lo1 from "../assets/images/logo-company/cty4.png";
import { Rating } from "react-simple-star-rating";
import StarProgress from "../components/progressBar/StarProgress";
import Video from "../components/popup/Video";
import Gallery from "../components/popup/Gallery";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import Header4 from "../components/header/Header4";

const marKers = [
  {
    id: 1,
    title: "Rockstar Games New York",
    name: "Senior UI/UX Designer",
    address: "Las Vegas, NV 89107, USA",
    longitude: -74.00122,
    latitude: 40.71023,
    img: lo1,
  },
];

Employersingle_v2.propTypes = {};

function Employersingle_v2(props) {
  const [rating, setRating] = useState(0);
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);

  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };
  useEffect(() => {
    if (progressRef?.current) {
      const offsetHeight = progressRef?.current?.offsetTop;
      setTargetHeight(offsetHeight);
    }
  }, [progressRef]);

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
                              <Link to="/">Home Page 01 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v2">Home Page 02 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v3">Home Page 03 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v4">Home Page 04 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v5">Home Page 05 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v6">Home Page 06 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v7">Home Page 07 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v8">Home Page 08 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v9">Home Page 09 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v10">Home Page 10 </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
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
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-list-sidebar">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid-sidebar">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v5">
                                List Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v6">
                                Grid Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v7">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v8">Top Map Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v9">Half Map - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v10">Half Map - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v1">Jobs Single - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v2">Jobs Single - V2</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile current-item">
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
                              <Link to="/employers_v1">List Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v4">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v5">Full Width</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v6">Top Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v7">Half Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employersingle_v1">
                                Employers Single - V1
                              </Link>
                            </li>
                            <li className="menu-item current-item">
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
                              <Link to="/candidates_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v4">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v5">Half Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v6">No Available V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v7">No Available V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidatesingle_v1">
                                Candidate Single - V1
                              </Link>
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
                        <Collapse isOpened={toggle.key === "blog"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "blog" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v1">Blog List </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v2">Blog Grid</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v3">Blog Masonry</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v1">Blog Details - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v2">Blog Details - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v3">
                                Blog Details Sidebar
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
                              <Link to="/pricing">Pricing</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shop">Shop List</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shoppingcart">Shopping Cart</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shopsingle">Shop Single</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/checkout">Checkout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/login">Login</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/createaccount">Create Account</Link>
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
      <Header4 clname="actEm3" handleMobile={handleMobile} />

    
      <section className="inner-employer-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="wd-job-author stc-em2 form-sticky fixed-space">
                <div className="inner-job-left">
                  <img
                    src={require("../assets/images/logo-company/cty4.png")}
                    alt="jobtex"
                    className="logo-company"
                  />
                  <div className="content">
                    <h3>
                      <Link to="#">Avitex Agency</Link>&nbsp;
                      <span className="icon-bolt"></span>
                    </h3>
                    <div className="job-info">
                      <span className="icon-map-pin"></span>
                      <span>Las Vegas, NV 89107, USA</span>
                    </div>
                    <div className="group-btn">
                      <button className="tf-btn">Follow</button>
                      <button className="tf-btn">2 job openings</button>
                    </div>
                  </div>
                </div>
                <div className="inner-job-right">
                  <span className="icon-share2"></span>
                  <div className="group-btn">
                    <button className="tf-btn-submit btn-popup">
                      Write a review
                    </button>
                    <button className="tf-btn">Message</button>
                  </div>
                </div>
              </div>
              <Tabs className="job-article tf-tab single-job single-employer">
                <TabList className="menu-tab">
                  <Tab className="ct-tab">About</Tab>
              
                </TabList>
                <div className="content-tab">
                  <TabPanel className="inner-content animation-tab">
                    <h5>About Company</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                    <p>
                      Deloitte's Green Dot Agency is looking to add a Lead User
                      Experience Designer to our experience design team. We want
                      a passionate creative who's inspired by new trends and
                      emerging technologies, and is able to integrate them into
                      memorable user experiences. A problem solver who is
                      entrepreneurial, collaborative, hungry, and humble; can
                      deliver beautifully designed, leading-edge experiences
                      under tight deadlines; and who has demonstrated proven
                      expertise.
                    </p>
                    <div className="post-navigation d-flex aln-center">
                      <div className="wd-social d-flex aln-center">
                        <span>Social Profiles:</span>
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
                      <Link to="#" className="frag-btn">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H13C13.1857 0 13.3678 0.0517147 13.5257 0.149349C13.6837 0.246984 13.8114 0.386681 13.8944 0.552786C13.9775 0.718892 14.0126 0.904844 13.996 1.08981C13.9793 1.27477 13.9114 1.45143 13.8 1.6L11.25 5L13.8 8.4C13.9114 8.54857 13.9793 8.72523 13.996 8.91019C14.0126 9.09516 13.9775 9.28111 13.8944 9.44721C13.8114 9.61332 13.6837 9.75302 13.5257 9.85065C13.3678 9.94829 13.1857 10 13 10H3C2.73478 10 2.48043 10.1054 2.29289 10.2929C2.10536 10.4804 2 10.7348 2 11V14C2 14.2652 1.89464 14.5196 1.70711 14.7071C1.51957 14.8946 1.26522 15 1 15C0.734784 15 0.48043 14.8946 0.292893 14.7071C0.105357 14.5196 0 14.2652 0 14V3Z"
                            fill="#64666C"
                          />
                        </svg>
                        Report job
                      </Link>
                    </div>
                    <div className="video-thumb">
                      <div className="content-tab2">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={require("../assets/images/review/thumbv3.jpg")}
                              alt="images"
                            />
                            <Video />
                          </div>
                        </div>
                      </div>
                      <Gallery />
                    </div>
           
                
                    <form method="post" className="wd-form-rating">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-rating-heading">
                            <h3>Be the first to review</h3>
                            <div className="group-rating">
                              <label>Your Rating:</label>
                              <Rating initialValue={4} onClick={handleRating} />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-rating-content">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="wrap-input">
                                  <label>Name</label>
                                  <input
                                    type="text"
                                    placeholder="Tony Nguyen |"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="wrap-input">
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    placeholder="jobtex@mail.com"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="wrap-checkbox">
                                  <input type="checkbox" />
                                  <label>
                                    Save your name, email for the next time
                                    review
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="wrap-notes">
                                  <label>Review</label>
                                  <textarea
                                    cols="30"
                                    rows="10"
                                    placeholder="Write comment"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button className="tf-btn-submit style-2">
                            submit review
                          </button>
                        </div>
                      </div>
                    </form>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>Full Job Description</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>Full Reviews</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart.
                    </p>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
            <div className="col-lg-4">
              <div className="cv-form-details st2 po-sticky">

                <ul className="list-infor">
                  <li>
                    <div className="category">Website</div>
                    <div className="detail">
                      <Link to="https://themeforest.net/user/themesflat">
                        Themesflat.vn
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="category">Email</div>
                    <div className="detail">themesflat@gmail.com</div>
                  </li>
                  <li>
                    <div className="category">Industry</div>
                    <div className="detail">Internet Publishing</div>
                  </li>
                  <li>
                    <div className="category">Company size</div>
                    <div className="detail">51-200 employees</div>
                  </li>
                  <li>
                    <div className="category">Headquarters</div>
                    <div className="detail">3 S Valley , Las Vegas, USA</div>
                  </li>
                  <li>
                    <div className="category">Founded</div>
                    <div className="detail">2017</div>
                  </li>
                </ul>

                <div className="wd-social d-flex aln-center">
                  <span>Socials:</span>
                  <ul className="list-social d-flex aln-center">
                    
                    <li>
                      <Link to="#">
                        <i className="icon-linkedin2"></i>
                      </Link>
                    </li>
                   
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

export default Employersingle_v2;
