import React from "react";
import PropTypes from "prop-types";
import { Link as ReactRouterLink } from "react-router-dom";

import "./Link.scss";

export function Link({ title, link }) {
  return (
    <ReactRouterLink style={{ textDecoration: "none" }} to={link}>
      <div className="cnt-link-button">
        <p className="tt-link">{title}</p>
      </div>
    </ReactRouterLink>
  );
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
