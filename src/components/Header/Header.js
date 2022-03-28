import React from "react";
//icon
import { BsBrush } from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
//scss
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="nav container">
        <div className="nav__logo">
          <BsBrush />
          <Link to="/">
            KADIOĞLU <span>HUKUK</span>
          </Link>
        </div>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="__item">
              <CustomLink to="/" className="nav__link">
                Home
              </CustomLink>
            </li>
            <li className="__item">
              <CustomLink className="nav__link" to="/about">
                About
              </CustomLink>
            </li>
            <li className="__item">
              <CustomLink to="/practice" className="nav__link">
                Practice
              </CustomLink>
            </li>
            <li className="__item">
              <CustomLink to="/attorneys" className="nav__link">
                Attorneys
              </CustomLink>
            </li>
            <li className="__item">
              <CustomLink to="/blog" className="nav__link">
                Blog
              </CustomLink>
            </li>
            <li className="__item">
              <CustomLink to="/contact" className="nav__link">
                Contact
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
