import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Message = ({ msg }) => {
  return (
    <div className="center-txt">
      <SentimentVeryDissatisfiedIcon />
      <p>{msg}</p>
    </div>
  );
};

export default Message;
