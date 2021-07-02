import React from "react";
import PropTypes from "prop-types";
import "./Link.scss";


export function Link({ title, link }) {
  return (
    <div className="cnt-link-button">
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        type="button"
        className="tt-link"
      >
        {title}
      </a>
    </div>
  );
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

