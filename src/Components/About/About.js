import React from "react";
import "./About.css";
import AboutSw from "../AboutS/AboutS";
export class About extends React.Component {
  render() {
    let about = <div></div>;
    if (this.props.result === "no") {
      about = <AboutSw result={this.props.result} />;
    } else {
      about = <AboutSw result={this.props.result} />;
    }
    return <div>{about}</div>;
  }
}
