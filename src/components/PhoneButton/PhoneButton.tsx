import { useState } from "react";
import "./PhoneButton.css"
import { FaPhone } from "react-icons/fa6";

const PhoneButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = (e: React.MouseEvent) => {
    if (window.innerWidth <= 767) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      className="phone-button-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href="tel:536195067"
        className={`phone-tooltip ${isOpen ? "phone-tooltip--open" : ""}`}
      >
        536195067
      </a>
      
      <a
        href="tel:536195067"
        className="phone-button"
        aria-label="Call 536195067"
        onClick={toggleTooltip}
      >
        <span className="phone-button__number">536195067</span>

        <span className="phone-button__icon-wrapper">
          <span className="phone-button__bubble">
            <FaPhone className="phone-button__phone-icon" />
          </span>
        </span>
      </a>
    </div>
  );
};

export default PhoneButton;