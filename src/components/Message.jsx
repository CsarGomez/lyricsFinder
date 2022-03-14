import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Message = ({ msg }) => {
  return (
    <div>
      <SentimentVeryDissatisfiedIcon />
      <p className="error">{msg}</p>
    </div>
  );
};

export default Message;
