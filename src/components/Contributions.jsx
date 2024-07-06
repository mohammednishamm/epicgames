import React from "react";

const Contributions = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center gap-2">
      <span className="text-white fs-4 fw-light">Our Contribution</span>
      <span className="text-white fs-6 fw-light text-center contri-font">
        Our core offering extends beyond mere profit generation; we emphasize
        the growth and active involvement of our user community. Collaborating
        with us represents an investment, rather than a mere expenditure. Our
        dedication to providing distinctive digital interactions guarantees
        unparalleled benefits for our clientele.
      </span>
      <div className=" d-flex flex-sm-row flex-column align-items-center gap-sm-0 gap-4  justify-content-between mt-3 rigths">
        <div className="d-flex col-3 flex-column  align-items-center ">
          <span className="text-white fs-2 fw-light">5M</span>
          <span className="text-white text-center fs-6 fw-lighter lh1">
            Daily User <br /> Engagements
          </span>
        </div>
        <div className="d-flex col-4 flex-column   align-items-center">
          <span className="text-white fs-2 fw-light">$500K</span>
          <span className="text-white fs-6 fw-lighter text-center">
            Revenue Surge for <br /> an Platform
          </span>
        </div>
        <div className="d-flex col-4 flex-column  align-items-center">
          <span className="text-white fs-2 fw-light">10X</span>
          <span className="text-white fs-6 fw-lighter text-center">
            ROAS on all our <br /> marketing campaigns
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
