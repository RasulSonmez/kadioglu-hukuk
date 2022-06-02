import React from "react";
import { Link } from "react-router-dom";
//scss
import "./AboutArea.scss";
//image
import aboutAreaImage from "../../assets/images/about-img-1.jpg";

const AboutAreaArea = () => {
  return (
    <div className="aboutArea section">
      <div className="aboutArea__container grid container">
        <div className="aboutArea__image">
          <img src={aboutAreaImage} alt="aboutArea" />
        </div>
        <div className="aboutArea__content">
          <h1>Hakkımızda</h1>

          <p>
            Kadıoğlu Hukuk Bürosu birçok avukat ve hukukçu katılımı ile bireysel
            ve kurumsal düzeyde hizmet sunabilecek yapıda örgütlenmiştir.
            Avukatlarımız müvekkillerine faaliyet gösterdikleri sektörleri
            özelinde, işlerine değer katan bir anlayış ve işbirliği içerisinde
            çalışarak hızlı ve güvenilir hukuk hizmeti sunmayı
          </p>
          <p>
            Hukuk Büromuz hukukun her alanında faaliyet göstermekle birlikte
            ağırlıklı olarak faaliyet gösterdiği İcra ve İflas Hukuku, Ticaret
            Hukuku, Şirketler Hukuku, İş Hukuku, Borçlar Hukuku, Basın Hukuku,
            Medeni Hukuk, Eşya Hukuku, İdare Hukuku, Vergi Hukuku, Ceza Hukuku
            gibi bir çok alanda, hukuki uyuşmazlıkların çözümlenmesine yönelik
            faaliyetler yürütmekte ve hizmet vermektedir.
          </p>

          <Link to="/about" className="button button-primary">
            Hakkımızda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaArea;
