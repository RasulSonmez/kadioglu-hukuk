import React from "react";
//icon
import { FiUser, FiUsers, FiAward } from "react-icons/fi";
import {
  MdBusinessCenter,
  MdCastForEducation,
  MdRealEstateAgent,
} from "react-icons/md";
//scss
import "./PracticeArea.scss";

const PracticeArea = () => {
  return (
    <div className="practiceArea section">
      <div className="practiceArea__container container">
        <div className="section__title">
          <h3>Hizmet Alanlarımız</h3>
          <h1>Nasıl Yardımcı Olabiliriz?</h1>
        </div>
        <div className="practiceArea__content grid">
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <FiUsers />
            </div>
            <div className="practiceArea__text">
              <h1>AİLE HUKUKU</h1>
              <p>
                Boşanma davaları, mal rejiminden kaynaklı davalar, nişanlılık,
                velayet ve nafaka başta olmak üzere birçok hizmet sunuyoruz.
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <FiUser />
            </div>
            <div className="practiceArea__text">
              <h1>İŞ VE SOSYAL GÜVENLİK HUKUKU</h1>
              <p>
                Yerli ve yabancı müvekkillerimize iş ve sosyal güvenlik
                hukukunda hukuki destek verilmektedir.
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <MdBusinessCenter />
            </div>
            <div className="practiceArea__text">
              <h1>TÜKETİCİ HUKUKU</h1>
              <p>
                Tüketici hukuki ile ilgili her türlü konuda müvekkillerimize
                hukuki danışmanlık hizmetini gerçekleştirmekteyiz.
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <FiAward />
            </div>
            <div className="practiceArea__text">
              <h1>Criminal Law</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                at iusto ut necessitatibus adipisci explicabo, corrupti eius
                tempora velit aspernatur?
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <MdCastForEducation />
            </div>
            <div className="practiceArea__text">
              <h1>ŞİRKETLER HUKUKU</h1>
              <p>
                Müvekkillerimize şirketlerinin kuruluş aşamalarından tasfiye
                süreçlerinin tamamlanmasına değin yazılı ve sözlü danışmanlık
                hizmeti veriyoruz.
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <MdRealEstateAgent />
            </div>
            <div className="practiceArea__text">
              <h1>TİCARET HUKUKU</h1>
              <p>
                Şahıs ve şirket yapılaşmasında olan müvekkillerimize ticaret
                hukuku alanına giren konularda hukuki görüş ve avukatlık hizmeti
                vermekteyiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
