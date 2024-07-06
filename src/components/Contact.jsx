import React from "react";

const Contact = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center gap-4">
      <span className="text-white fs-4 fw-light p-1">
        Interested in delving deeper into the project?
      </span>
      <span className="text-white fs-6 fw-light text-center cont-font">
        If you'd like to explore further details about our initiatives or any of
        our affiliated brands, don't hesitate to connect. You can reach out to
        us via email at hello@abc.com or give us a call at +91 480 20802730.
      </span>
      <div className="d-flex col-12 flex-sm-row flex-column gap-3 align-items-center justify-content-center">
        <button className="border-light text-white  cont-ring-btn">
          Ring us on Skype
        </button>
        <button className="border-0 text-black contact-btn">Contact Us</button>
      </div>

      <span className="fw-lighter  text-white mt-5 foot-font">
        {" "}
        2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </span>
    </div>
  );
};

export default Contact;
