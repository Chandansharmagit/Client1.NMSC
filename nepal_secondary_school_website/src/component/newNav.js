import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import schoool_logo from "../component/school.png";
import { Link, NavLink } from "react-router-dom";
import new_images_logo from "../main_logo/new_images_png.png";
import "../component/nav.css";
import logo_image from "../main_logo/main_image.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function NewNav({ product, DarkMode }) {
  const { loginWithRedirect } = useAuth0();

  const home = () => {
    document.title = "home";
  };

  const news_and_event = () => {
    document.title = "news_and_event";
  };

  const Image_gallary = () => {
    document.title = "Image-gallary";
  };

  const Results = () => {
    document.title = "Results";
  };

  const Contacts_us = () => {
    document.title = "Contacts_us";
  };
  const New_admission = () => {
    document.title = "new addmissions..";
  };

  //setting the dark mode on the button click in the react js
  const handledarkmode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  //setting the light mode on the button click in the react js
  const handlelightmode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const handlechangefilters = () => {

  }

  //making the useeffect to reduce the bugs in the navbar

  return (
    <>
      <div>
        {/* <div className="features flex-container ">
          <h1>Nepal Model Secondary School</h1>
          <span className="show-details">
           
          </span>
          <h5 className="allproducts">
            Sort by - features{" "}
            <span>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="high"
                >
                  price high to low
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">
                    price low to high
                  </button>
                  <button class="dropdown-item" type="button">
                    New arrivals
                  </button>
                  <button class="dropdown-item" type="button">
                    Names
                  </button>
                </div>
              </div>
            </span>
          </h5>
        </div> */}

        <nav className="navbar navbar-dark  navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <div className="avatar">
              <img alt="" src={logo_image} className="images-circle"></img>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                {/* <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5> */}
                <div className="avatar">
                  <img alt="" src={logo_image} className="images-circle"></img>
                </div>

                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={home}>
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li className="nav-item active">
                    <Link
                      className="nav-link"
                      to="/Component"
                      onClick={news_and_event}
                      id="my-element"
                    >
                      News and Events{" "}
                      <span className="badge badge-secondary">New</span>
                    </Link>
                  </li>

                  <li className="nav-item active">
                    <Link className="nav-link" to="/result" onClick={Results}>
                      View Results{" "}
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link"
                      to="/registration"
                      onClick={Contacts_us}
                    >
                      Online Admission{" "}
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                    >
                      <span className="badge badge-secondary">New</span>
                      Academics
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <div className="col-images">
                        <div className="row.mm">
                          <Link className="dropdown-item" to="/Image-gallary">
                            Image Gallary{" "}
                          </Link>
                          <Link className="dropdown-item" to="/videos_NMSC">
                            Videos Gallary{" "}
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/plustwplevel/our_program"
                          >
                            Courses for +2 level{" "}
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/student-enrollment"
                          >
                            Student Enrollments
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/Download-our-book"
                          >
                            Download our Book
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/admin/panel/login"
                          >
                            Admin Login
                          </Link>
                          {/* <Link className="dropdown-item" to="/admin/panel/sign">Admin Sign up!</Link>
                                                    <Link className="dropdown-item" to="/admin/panel/login/User_login/userlogout">Logout!</Link> */}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      HR
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <div className="col-images">
                        <div className="row.mm">
                          <Link className="dropdown-item" to="/staff">
                            Teaching Staff
                          </Link>

                          <Link className="dropdown-item" to="/non_staff">
                            Working Staff
                          </Link>

                          <Link
                            className="dropdown-item"
                            to="/Manangement-commitee"
                          >
                            Administrative Committee
                          </Link>

                          <Link
                            className="dropdown-item"
                            to="/school-management-team"
                          >
                            Management Committee
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About us
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <div className="col-images">
                        <div className="row.mm">
                          <Link className="dropdown-item" to="/About">
                            About NMSC
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/student-enrollment"
                          >
                            Student Enrollments
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/Download-our-book"
                          >
                            Download our Book
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <div className="blinking">
                    <li className="nav-item active">
                      <Link
                        className="nav-link"
                        to="/Download-our-book"
                        onClick={New_admission}
                      >
                        Our 3 years missions{" "}
                        <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                  </div>

                  <li className="nav-item dropdown">
                    <div className="toggledarkmode">
                      <input type="checkbox" className="checkbox"></input>

                      <i
                        className="fa fa-moon-o"
                        id="moon"
                        onClick={handledarkmode}
                      ></i>
                      <i
                        className="fa fa-sun-o"
                        id="sun"
                        onClick={handlelightmode}
                      ></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
