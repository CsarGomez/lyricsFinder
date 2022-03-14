import React from "react";
import "../css/loader.css";

class Loader extends React.Component {
  render() {
    return (
      <div className={"lds-ring content"}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
