import React, { Component } from "react";
import PapersContainer from "../Components/PapersContainer";
import "../Styles/Papers.css";

export default class Papers extends Component {
  render() {
    return (
      <div className="paper-page">
        <PapersContainer match={this.props.match} />
      </div>
    );
  }
}
