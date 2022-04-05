import React from "react";
//icon
import { BsBrush, BsColumnsGap, BsArrowDown } from "react-icons/bs";
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
            <li className="nav__item">
              <CustomLink to="/" className="nav__link">
                Home
              </CustomLink>
            </li>
            <li className="nav__item">
              <CustomLink className="nav__link" to="/about">
                About
              </CustomLink>
            </li>
            <li className="nav__item ">
              <CustomLink to="/practice" className="nav__link dropdown">
                <div class=" dropdown__link">
                  <span class="nav__link">Practice</span>
                  <BsArrowDown className="dropdown__icon" />
                </div>
                <ul class="dropdown__menu">
                  <li>
                    <Link to="/practice" class="nav__link">
                      Family Law
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" class="nav__link">
                      Personal Injury
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" class="nav__link">
                      Business Law
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" class="nav__link">
                      Criminal Law
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" class="nav__link">
                      Education Law
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" class="nav__link">
                      Real Estate Law
                    </Link>
                  </li>
                </ul>
              </CustomLink>
            </li>
            <li className="nav__item">
              <CustomLink to="/attorneys" className="nav__link">
                Attorneys
              </CustomLink>
            </li>
            <li className="nav__item">
              <CustomLink to="/blog" className="nav__link">
                Blog
              </CustomLink>
            </li>
            <li className="nav__item">
              <CustomLink to="/contact" className="nav__link">
                Contact
              </CustomLink>
            </li>
          </ul>
        </div>
        <div className="nav__toggle">
          <BsColumnsGap />
        </div>
      </nav>
    </header>
  );
};

export default Header;
