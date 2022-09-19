import React, { Fragment } from "react";
import Button from "../../components/button/button.component";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./landing-page.styles.scss";

const LandingPage = () => {
  return (
    <Fragment>
      <MDBCarousel
        showControls
        showIndicators
        className="landing-carousel-container"
      >
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://www.simpleimageresizer.com/_uploads/photos/16a9d5a6/ecommerce-3562191_960_720_1320x583.jpeg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://www.simpleimageresizer.com/_uploads/photos/16a9d5a6/baby-784608_960_720_1320x583.jpeg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://www.simpleimageresizer.com/_uploads/photos/16a9d5a6/tai-s-captures-y4c-V-g-Qqm-VI-unsplash_1320x583.jpeg"
          alt="..."
        />
      </MDBCarousel>
      <div className="upper-block">
        <div className="intro-container">
          <h2>Boost your happiness with Trendlin Store products</h2>
          <p>
            Trendlin enables express checkouts from our platform with no code
            generation. Get the very best.
          </p>
          <Button text="Get Started" buttonType="google" type="button" />
        </div>
        <div className="logo-container">
          <img
            src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
            alt="sneakers"
            className="logo-img"
          />
        </div>
      </div>
      <div className="lower-block">
        <div className="lower-block-level">
          Trendlin enables express checkouts from our platform with no code
          generation. Get the very best.
        </div>
        <div className="lower-block-level">
          Trendlin enables express checkouts from our platform with no code
          generation. Get the very best.
        </div>
        <div className="lower-block-level">
          Trendlin enables express checkouts from our platform with no code
          generation. Get the very best.
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
