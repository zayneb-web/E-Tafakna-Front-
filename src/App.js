import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home_v7 from "./pages/Home_v7";
import Joblist_v1 from "./pages/Joblist_v1";
import Jobsingle_v1 from "./pages/Jobsingle_v1";
import Employer_v2 from "./pages/Employer_v2";
import Employersingle_v2 from "./pages/Employersingle_v2";
import EmployerReview from "./pages/EmployerReview";
import Employernotfound from "./pages/Employernotfound";
import Candidates_v2 from "./pages/Candidates_v2";
import Candidates_v6 from "./pages/Candidates_v6";
import SampleCV from "./pages/SampleCV";
import SampleCVdetails from "./pages/SampleCVdetails";
import SampleCVslidebar from "./pages/SampleCVslidebar";
import Candidatesingle_v2 from "./pages/Candidatesingle_v2";
import Termsofuse from "./pages/Termsofuse";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Preloader from "./components/preloader";
import ProposalForm from "./components/ProposalForm";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AddJob from "./pages/AddJob";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home_v7/> },
    { path: "/joblist_v1", element: <Joblist_v1 /> },
    { path: "/jobsingle_v1/:id", element : <Jobsingle_v1 />} ,
    { path: "/employers_v2", element: <Employer_v2 /> },
    { path: "/employersingle_v2", element: <Employersingle_v2 /> },
    { path: "/employerreview", element: <EmployerReview /> },
    { path: "/employernotfound", element: <Employernotfound /> },
    { path: "/candidates_v2", element: <Candidates_v2 /> },
    { path: "/candidates_v6", element: <Candidates_v6 /> },
    { path: "/samplecv", element: <SampleCV /> },
    { path: "/samplecvdetails", element: <SampleCVdetails /> },
    { path: "/samplecvslidebar", element: <SampleCVslidebar /> },
    { path: "/candidatesingle_v2", element: <Candidatesingle_v2 /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/Register", element: <RegisterPage /> },
    { path: "/apply/:jobId", element: <ProposalForm /> },
    { path: "/AddJob", element: <AddJob /> },


   /* { path: "/aboutus", element: <AboutUs /> }, */ 
    { path: "/termsofuse", element: <Termsofuse /> },
    { path: "/contactus", element: <ContactUs /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default AppWrapper;
