import React from "react";
import { withPaperConsumer } from "../Context/PaperContext";
import Loading from "../Components/Loading";
import PapersList from "./PapersList";

export function PapersContainer({ context, match }) {
  const { loading, papers } = context;
  const { subject, type } = match.params;
  let items;

  if (subject && type) {
    items = papers.filter(
      paper => paper.subject === subject && paper.paperType === type
    );
  } else if (subject) {
    items = papers.filter(paper => paper.subject === subject);
  } else {
    items = papers;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="paperContainer">
      {/* <PaperFilter></PaperFilter> */}
      <PapersList papers={items} />
    </div>
  );
}

export default withPaperConsumer(PapersContainer);
