import React from "react";
import { Link } from "react-router-dom";
//icon
import { SiTwitter, SiFacebook } from "react-icons/si";
import { BsInstagram, BsBrush } from "react-icons/bs";

//css
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__topArea">
          <div className="footer__topArea__content grid container">
            <div className="footer__topArea__item">
              <div className="nav__logo">
                <BsBrush />
                <Link to="/">
                  KADIOĞLU <span>HUKUK</span>
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate commodi ex alias maxime eum nesciunt excepturi{" "}
              </p>
            </div>
            <div className="footer__topArea__item">
              <h3 className="footer__topArea__title">Quick Link</h3>
              <ul className="footer__topArea__list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/practice">Practice</Link>
                </li>
                <li>
                  <Link to="/attorneys">Attorneys</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer__topArea__item">
              <h3 className="footer__topArea__title">Practice Area</h3>
              <ul className="footer__topArea__list">
                <li>
                  <Link to="/practice">Family Law</Link>
                </li>
                <li>
                  <Link to="/practice">Personal Injury</Link>
                </li>
                <li>
                  <Link to="/practice">Business Law</Link>
                </li>
                <li>
                  <Link to="/practice">Criminal Law</Link>
                </li>
                <li>
                  <Link to="/practice">Education Law</Link>
                </li>
                <li>
                  <Link to="/practice">Real Estate Law</Link>
                </li>
              </ul>
            </div>
            <div className="footer__topArea__item">
              <h3 className="footer__topArea__title">Contact US</h3>
              <p className="footer__topArea__address">
                Head Office Address 121 King Street, Melbourne West, Australia
                Phone: 888 123-4587 Email: info@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottomArea ">
          <div className="footer__bottomArea__wrapper container grid">
            <span className="footer__bottomArea__copyright">
              Privacy Policy | © 2022{" "}
              <a href="https://www.rasulsonmez.com/" target="_blank">
                rasulSonmez
              </a>{" "}
              All rights reserved.
            </span>

            <ul className="footer__bottomArea__social">
              <li>
                <a href="#">
                  <SiFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <SiTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
