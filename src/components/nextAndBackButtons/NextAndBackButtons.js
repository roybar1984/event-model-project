import React from "react";
import "./NextAndBackButtons.css";
import Btn from "../btn/Btn";
import { useNavigate } from "react-router-dom";

function NextAndBackButtons(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/${props.back}`);
  };
  const handleNext = () => {
    navigate(`/${props.next}`);
  };

  return (
    <div
      className={`prev-back-btns-container ${props.isContinuePage &&
        "display-none-btns"}`}
    >
      <Btn
        className="prev-next-btn btns"
        handleClick={handleBack}
        buttonText="חזור"
        backClass="backClass"
      />
      <Btn
        className="prev-next-btn btns"
        handleClick={handleNext}
        buttonText="המשך"
        backClass="noBackClass"
      />
    </div>
  );
}

export default NextAndBackButtons;
