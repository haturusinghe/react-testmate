import React from "react";
import Paper from "./PaperV2";

export default function PapersList({ papers }) {
  if (papers.length === 0) {
    return (
      <div>
        <h3>unfortunately no papers matched your search parameters</h3>
      </div>
    );
  }

  return (
    <div className="paperContainer-List">
      {papers.map((paper, index) => {
        return <Paper paper={paper} key={index} />;
      })}
    </div>
  );
}
