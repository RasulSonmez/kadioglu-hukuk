import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
//css
import "./ContactPageArea.scss";

const ContactPageArea = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    event.target.name === "user_name"
      ? setName(event.target.value)
      : event.target.name === "user_email"
      ? setEmail(event.target.value)
      : event.target.name === "message"
      ? setMessage(event.target.value)
      : console.log("error");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c42b904",
        "template_19dv7j6",
        form.current,
        "mDnYVzPuAwxpPE-JX"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setStatus("SUCCESS");
          setName("");
          setMessage("");
          setEmail("");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <>
      {" "}
      <div className="contactPageArea section">
        <div className="contactPageArea__content">
          <div className="contactPageArea__container container grid">
            <div className="contactPageArea__item ">
              <h4>Hemen İletişime Geçin!</h4>
              <h1>Hukuki Danışmanlık</h1>
              <h5>İstanbul/Turkiye</h5>
              <p>
                Hukuki süreçler çoğunlukla karmaşık ve yorucudur. Yandaki
                iletişim formunu doldurarak hukuki süreçlerinizle ilgili
                görüşmek istediğiniz konuyu ve ön görüşme talebinizi avukatlık
                büromuza iletebilirsiniz.
              </p>
              <h1>Telefon</h1>
              <p>
                0-123-456-7890 <br /> 0-123-456-7890
              </p>
              <h1>Email Adresi</h1>
              <p>info@example.com</p>
            </div>
            <div className="contactPageArea__form ">
              {status && renderAlert()}
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  onChange={(e) => handleChange(e)}
                  value={name}
                  placeholder="İsim Soyisim"
                />
                <input
                  type="email"
                  name="user_email"
                  onChange={(e) => handleChange(e)}
                  value={email}
                  placeholder="Mail Adresi"
                />
                <textarea
                  name="message"
                  onChange={(e) => handleChange(e)}
                  value={message}
                  cols="30"
                  rows="10"
                  placeholder="Mesajınız"
                ></textarea>
                <button
                  className="button button-secondary"
                  type="submit"
                  value="Send"
                >
                  Randevu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55867130.06471575!2d-68.96662990255712!3d31.279994830879446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sAmerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1647787306848!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};
const renderAlert = () => (
  <div className="alert">
    <p>Your message submitted successfully</p>
  </div>
);

export default ContactPageArea;
