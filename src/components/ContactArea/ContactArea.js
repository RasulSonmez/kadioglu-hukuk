import React from "react";
//scss
import "./ContactArea.scss";

const ContactArea = () => {
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
  );
};

export default ContactArea;
