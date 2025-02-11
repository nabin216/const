import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
export default function Footer() {
  return (
    <>
      <>
        {/* Site footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>Uttara Construction</h6>
                <p className="text-justify">
                  House-17, Road-18, Sector-07, Uttara
                  <br /> Dhaka-1230, Bangladesh. <br />
                  +01630715744
                </p>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Our Sites</h6>
                <ul className="footer-links">
                  <li>
                    <Link to="/developer-projects">Magarpatta City</Link>
                  </li>
                  <li>
                    <Link to="/developer-projects">Nanded City</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <Link to="/developer-projects">Projects</Link>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/sitemap">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright © 2023 All Rights Reserved by Uttara Construction<br />
                  Developed by{" "}
                  <a href="https://in.linkedin.com/in/vedant-mute">Navcode IT Solutions</a>
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <img src={facebook} className="social-icon" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <img src={linkedin} className="social-icon" alt="" />
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="#">
                      <img src={instagram} className="social-icon" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}
