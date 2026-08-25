import "./PhoneButton.css"
import { FaPhone } from "react-icons/fa6";

const PhoneButton = () => {
  return (
    <a
      href="tel:536195067"
      className="phone-button"
      aria-label="Call 536195067"
    >
      <span className="phone-button__number">536195067</span>

      <span className="phone-button__icon-wrapper">
        <span className="phone-button__bubble">
          <FaPhone className="phone-button__phone-icon" />
        </span>
      </span>
    </a>
  );
};

export default PhoneButton;