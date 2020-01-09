import React, { Component } from "react";
import SinglePaperCom from "../Components/SinglePaperCom";

export default class SinglePaper extends Component {
  render() {
    return (
      <div>
        <SinglePaperCom match={this.props.match} />
      </div>
    );
  }
}
