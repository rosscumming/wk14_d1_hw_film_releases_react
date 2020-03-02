import React from "react";

function Film({ url, children }) {
  return (
    <li>
      <a href={url}>{children} </a>
    </li>
  );
}

export default Film;
