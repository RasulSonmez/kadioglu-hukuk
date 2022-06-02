import React from "react";
//icon
import {
  MdOutlinePeople,
  MdOutlinePersonAddAlt1,
  MdListAlt,
  MdOutlineBusinessCenter,
} from "react-icons/md";
//css
import "./BannerTwoArea.scss";

const BannerTwoArea = () => {
  return (
    <div className="bannerTwoArea">
      <div className="bannerTwoArea__wrapper">
        <div className="bannerTwoArea__container container">
          <div className="bannerTwoArea__content ">
            <div className="bannerTwoArea__item">
              <div className="bannerTwoArea__title">
                <div className="bannerTwoArea__title-one">
                  <MdListAlt />
                  95%
                </div>
                <p>Başarılı Dava</p>
              </div>
            </div>
            <div className="bannerTwoArea__item">
              <div className="bannerTwoArea__title">
                <div className="bannerTwoArea__title-one">
                  <MdOutlinePeople />
                  863
                </div>
                <p>Güvenilir Müşteri</p>
              </div>
            </div>
            <div className="bannerTwoArea__item">
              <div className="bannerTwoArea__title">
                <div className="bannerTwoArea__title-one">
                  <MdOutlinePersonAddAlt1 />4 +
                </div>
                <p>Özel Avukat</p>
              </div>
            </div>
            <div className="bannerTwoArea__item">
              <div className="bannerTwoArea__title">
                <div className="bannerTwoArea__title-one">
                  <MdOutlineBusinessCenter />
                  100%
                </div>
                <p>Mutlu Müşteriler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwoArea;
