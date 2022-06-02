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
              <p>Alanında uzman Avukatlar ile hızlı hukuk çözümler.</p>
            </div>
            <div className="footer__topArea__item">
              <h3 className="footer__topArea__title">Quick Link</h3>
              <ul className="footer__topArea__list">
                <li>
                  <Link to="/">Ana Sayfa</Link>
                </li>
                <li>
                  <Link to="/about">Hakkımızda</Link>
                </li>
                <li>
                  <Link to="/practice">Hizmetler</Link>
                </li>
                <li>
                  <Link to="/attorneys">Avukatlar</Link>
                </li>
                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
                <li>
                  <Link to="/contact">İletişim</Link>
                </li>
              </ul>
            </div>
            <div className="footer__topArea__item">
              <h3 className="footer__topArea__title">Hizmetlerimiz</h3>
              <ul className="footer__topArea__list">
                <li>
                  <Link to="/practice"> Aile Hukuku</Link>
                </li>
                <li>
                  <Link to="/practice">İcra ve İflas Hukuku</Link>
                </li>
                <li>
                  <Link to="/practice">İş ve Sosyal Güvenlik Hukuku</Link>
                </li>
                <li>
                  <Link to="/practice"> Tüketici Hukuku</Link>
                </li>
                <li>
                  <Link to="/practice"> Ticaret Hukuku</Link>
                </li>
                <li>
                  <Link to="/practice">Yabancılar ve Vatandaşlık Hukuku</Link>
                </li>
              </ul>
            </div>
            <div className="footer__topArea__item">
              <h3 className="footer__topArea__title">İletişime Geçin</h3>
              <p className="footer__topArea__address">İstanbul/Türkiye</p>
            </div>
          </div>
        </div>
        <div className="footer__bottomArea ">
          <div className="footer__bottomArea__wrapper container grid">
            <span className="footer__bottomArea__copyright">
              Privacy Policy | © 2022{" "}
              <a href="https://www.rasulsonmez.com/" target="_blank">
                Kadıoğlu Hukuk Bürosu
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
