import React from "react";
import user from "../data/user"; // Adjust the path as necessary

function Links() {
  return (
    <div>
      <h3>Links</h3>
      <a href={user.links.github} target="_blank" rel="noopener noreferrer">
        {user.links.github}
      </a>
      <br /> {/* Line break for spacing */}
      <a href={user.links.linkedin} target="_blank" rel="noopener noreferrer">
        {user.links.linkedin}
      </a>
    </div>
  );
}

export default Links;
