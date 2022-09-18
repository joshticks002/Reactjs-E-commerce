import React, { Fragment } from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './landing-page.styles.scss'

const LandingPage = () => {
  return (
    <Fragment>
        <div className='upper-block'>
            Introduce Trendlin
        </div>
    <MDBCarousel showControls showIndicators className="landing-carousel-container">
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.simpleimageresizer.com/_uploads/photos/16a9d5a6/ecommerce-3562191_960_720_1320x583.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.simpleimageresizer.com/_uploads/photos/16a9d5a6/baby-784608_960_720_1320x583.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.simpleimageresizer.com/_uploads/photos/16a9d5a6/tai-s-captures-y4c-V-g-Qqm-VI-unsplash_1320x583.jpeg'
        alt='...'
      />
    </MDBCarousel>
    <div className='lower-block'>
        Talk about trendlin
    </div>
    </Fragment>
  );
}

export default LandingPage