import { useState } from "react";
//icon
import { BsBrush, BsTextLeft, BsArrowDownShort, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
//scss
import "./Header.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("false");

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <nav className="nav container">
        <div className="nav__logo">
          <BsBrush />
          <Link to="/">
            KADIOĞLU <span>HUKUK</span>
          </Link>
        </div>

        <div className={toggleMenu ? "nav__menu" : "nav__menu show-menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <CustomLink to="/" className="nav__link">
                Ana Sayfa
              </CustomLink>
            </li>
            <li className="nav__item">
              <CustomLink className="nav__link" to="/about">
                Hakkımızda
              </CustomLink>
            </li>
            <li className="nav__item ">
              <Link to="/practice" className="nav__link dropdown">
                <div class=" dropdown__link">
                  <span class="nav__link">Hizmetlerimiz</span>
                  <BsArrowDownShort className="dropdown__icon" />
                </div>
                <ul className="dropdown__menu">
                  <li>
                    <Link to="/practice" className="nav__link">
                      Aile Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" className="nav__link">
                      İcra ve İflas Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" className="nav__link">
                      İş ve Sosyal Güvenlik Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" className="nav__link">
                      Tüketici Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" className="nav__link">
                      Ticaret Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice" className="nav__link">
                      Yabancılar ve Vatandaşlık Hukuku
                    </Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li className="nav__item">
              <CustomLink to="/attorneys" className="nav__link">
                Takım
              </CustomLink>
            </li>
            {/* <li className="nav__item">
              <CustomLink to="/blog" className="nav__link">
                Blog
              </CustomLink>
            </li> */}
            <li className="nav__item">
              <CustomLink to="/contact" className="nav__link">
                İletişim
              </CustomLink>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" onClick={handleToggle}>
          {toggleMenu ? <BsTextLeft /> : <BsX />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
