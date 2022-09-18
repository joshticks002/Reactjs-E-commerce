import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import "./contact-us.styles.scss"

const ContactUs = () => {
  return (
    <div id="footer">
        <img src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg" alt="sneakers" className="footer-img" />
      <div className="title-text">
        {/* <p>Contact</p> */}
        <h1>Visit Trendlin today</h1>
      </div>
      <div className="footer-row">
        <div className="footer-left">
          <h1>Opening Hours</h1>
          <p>
            <i className="fa fa-clock-o" aria-hidden="true"></i>Monday to Friday -
            9am to 9pm
          </p>
          <p>
            <i className="fa fa-clock-o" aria-hidden="true"></i>Saturday and sunday
            - 8am to 11pm
          </p>
        </div>
        <div className="footer-right">
          <h1>Get in Touch</h1>
          <p>
            #30 abc Colony, xyz City IN
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </p>
          <p>
            example@website.com
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </p>
          <p>
            +234 8169833589<i className="fa fa-phone" aria-hidden="true"></i>
          </p>
        </div>
      </div>
      <div className="social-links">
        <div className="fa" aria-hidden="true">
        <FaFacebookF  />
        </div>
        <div className="fa" aria-hidden="true">
        <FaGoogle  />
        </div>
        <div className="fa" aria-hidden="true">
        <FaInstagram  />
        </div>
        <div className="fa" aria-hidden="true">
        <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
