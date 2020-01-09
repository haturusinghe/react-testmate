import React from "react";
import { Link } from "react-router-dom";

export default function Paper({ paper }) {
  const {
    name,
    subject,
    paperType,
    year,
    slug,
    numberOfDownloads,
    images
  } = paper;
  return (
    <article className="paper">
      <div className="img-container">
        <img src={images[0]} alt={name} />
        <div className="downloads-top">
          <h6>{numberOfDownloads}</h6>
          <p>Downloads</p>
        </div>
        <Link
          className="dwn-link btn-primary"
          to={`/papers/${subject}/${paperType}/${year}/${slug}`}
        >
          Download Paper
        </Link>
      </div>
      <p>{name}</p>
    </article>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// export default function Paper({ paper }) {
//   const { name, subject, paperType, numberOfDownloads, images, slug } = paper;

//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0]} alt="" />

//         </div>
//         <Link
//           to={`/${subject}/${paperType}/${slug}`}
//           className="btn-primary room-link"
//         >
//           Download
//         </Link>
//         <p className="room-info">{name}</p>
//       </div>
//     </article>
//   );
// }
