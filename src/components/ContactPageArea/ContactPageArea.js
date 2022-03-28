import React from "react";
//css
import "./ContactPageArea.scss";

const ContactPageArea = () => {
  return (
    <>
      {" "}
      <div className="contactPageArea section">
        <div className="contactPageArea__content">
          <div className="contactPageArea__container container grid">
            <div className="contactPageArea__item ">
              <h4>Frea Consulting</h4>
              <h1>Our Contacts</h1>
              <h5>19 County Road 922, Mentone,al, 35984 United States</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati et perspiciatis eius iure modi ducimus soluta est
                laudantium eaque vel natus unde non reprehenderit praesentium
                quam, molestiae in excepturi saepe enim deserunt. Sint,
                voluptatum repellat ea dignissimos laudantium illum eum.
              </p>
              <h1>Phone</h1>
              <p>
                0-123-456-7890 <br /> 0-123-456-7890
              </p>
              <h1>Email</h1>
              <p>info@example.com</p>
            </div>
            <div className="contactPageArea__form ">
              <form action="#" className="">
                <input type="text" placeholder="Your Name" />
                <input type="phone" placeholder="Phone" />
                <input type="email" placeholder="Email" />
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  placeholder="Case Description..."
                ></textarea>
                <button className="button button-secondary">Appointment</button>
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

export default ContactPageArea;
