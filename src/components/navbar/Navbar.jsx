import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar({ authenticated }) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark ">
        <div style={{ display: "flex", flexGrow: "0" ,marginTop:"8px"}}>
            <a className="navbar-brand text-white h1 mx-5 logo" href="/">
              Bean <span style={{ color: "green" }}>Bar</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: "white",
              border: "none",
              boxShadow: "none",
              marginRight: "16px",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav ul "
              style={{ display: "flex", flexGrow: "1"}}
            >
              <li className="nav-item active">
                <Link
                  to="/"
                  className="nav-link mx-4 active text-white display-4"
                >
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link mx-4 text-white display-4"
                >
                  About
                </Link>
              </li>

              {authenticated && (
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link mx-4 text-white display-4"
                  >
                    Contacts
                  </Link>
                </li>
              )}
            </ul>
            <div className="mx-5 auth">
              <ul className="navbar-nav">
                {!authenticated && (
                  <>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link text-white mt-2">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link">
                        <button className="ButtonPrimary" style={{}}>
                          Sign Up
                        </button>
                      </Link>
                    </li>
                  </>
                )}

                {authenticated && (
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link text-white">
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
  
    </>
  );
}
