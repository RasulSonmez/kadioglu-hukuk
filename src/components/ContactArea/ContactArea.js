import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
//scss
import "./ContactArea.scss";

const ContactArea = () => {
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
    <div className="contactArea section">
      <div className="contactArea__content">
        <div className="contactArea__container container grid">
          <div className="contactArea__item ">
            <h4>For Our Honorabe Clients</h4>
            <h1>Free Consulting</h1>
            <h5>Call us 24/7 at (888)123-4567 or fill out the form.</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati et perspiciatis eius iure modi ducimus soluta est
              laudantium eaque vel natus unde non reprehenderit praesentium
              quam, molestiae in excepturi saepe enim deserunt. Sint, voluptatum
              repellat ea dignissimos laudantium illum eum.
            </p>
          </div>
          <div className="contactArea__form ">
            {status && renderAlert()}
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                onChange={(e) => handleChange(e)}
                value={name}
                placeholder="Your Name"
              />
              <input
                type="email"
                name="user_email"
                onChange={(e) => handleChange(e)}
                value={email}
                placeholder="Mail Address"
              />
              <textarea
                name="message"
                onChange={(e) => handleChange(e)}
                value={message}
                cols="30"
                rows="10"
                placeholder="Case Description..."
              ></textarea>
              <button
                className="button button-secondary"
                type="submit"
                value="Send"
              >
                Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderAlert = () => (
  <div className="alert">
    <p>Your message submitted successfully</p>
  </div>
);

export default ContactArea;
