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
import Employerdashboard from "./pages/Employerdashboard";
import Candidates_v2 from "./pages/Candidates_v2";
import Candidates_v6 from "./pages/Candidates_v6";
import SampleCV from "./pages/SampleCV";
import SampleCVdetails from "./pages/SampleCVdetails";
import SampleCVslidebar from "./pages/SampleCVslidebar";
import Candidatesingle_v2 from "./pages/Candidatesingle_v2";
import Blog_v1 from "./pages/Blog_v1";
import Blog_v2 from "./pages/Blog_v2";
import Blog_v3 from "./pages/Blog_v3";
import Blogsingle_v1 from "./pages/Blogsingle_v1";
import Blogsingle_v2 from "./pages/Blogsingle_v2";
import Blogsingle_v3 from "./pages/Blogsingle_v3";
import Shop from "./pages/Shop";
import Shopsingle from "./pages/Shopsingle";
import Shoppingcart from "./pages/Shoppingcart";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import Termsofuse from "./pages/Termsofuse";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Preloader from "./components/preloader";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home_v7/> },
    { path: "/joblist_v1", element: <Joblist_v1 /> },
    { path: "/jobsingle_v1", element: <Jobsingle_v1 /> },
    { path: "/employers_v2", element: <Employer_v2 /> },
    { path: "/employersingle_v2", element: <Employersingle_v2 /> },
    { path: "/employerreview", element: <EmployerReview /> },
    { path: "/employernotfound", element: <Employernotfound /> },
    { path: "/employerdashboard", element: <Employerdashboard /> },
    { path: "/candidates_v2", element: <Candidates_v2 /> },
    { path: "/candidates_v6", element: <Candidates_v6 /> },
    { path: "/samplecv", element: <SampleCV /> },
    { path: "/samplecvdetails", element: <SampleCVdetails /> },
    { path: "/samplecvslidebar", element: <SampleCVslidebar /> },
    { path: "/candidatesingle_v2", element: <Candidatesingle_v2 /> },
    { path: "/blog_v1", element: <Blog_v1 /> },
    { path: "/blog_v2", element: <Blog_v2 /> },
    { path: "/blog_v3", element: <Blog_v3 /> },
    { path: "/blogsingle_v1", element: <Blogsingle_v1 /> },
    { path: "/blogsingle_v2", element: <Blogsingle_v2 /> },
    { path: "/blogsingle_v3", element: <Blogsingle_v3 /> },
    { path: "/shop", element: <Shop /> },
    { path: "/shopsingle", element: <Shopsingle /> },
    { path: "/shoppingcart", element: <Shoppingcart /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/faqs", element: <Faqs /> },
    { path: "/termsofuse", element: <Termsofuse /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/login", element: <Login /> },
    { path: "/createaccount", element: <CreateAccount /> },
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
