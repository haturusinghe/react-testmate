import React from "react";
import loading from "../Images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>loading images..</h4>
      <img src={loading} alt="Loading Elements" />
    </div>
  );
}
