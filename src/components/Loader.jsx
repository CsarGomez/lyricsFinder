import React from "react";
import "../css/loader.css";

class Loader extends React.Component {
  render() {
    return (
      <div className={"lds-ring"}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
