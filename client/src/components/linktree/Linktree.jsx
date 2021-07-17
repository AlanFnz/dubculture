import React from "react";
import PropTypes from "prop-types";
import { Link } from "./Link";

import "./_d_Linktree.scss";

export function Linktree({ links }) {
  return (
    <div className="cnt-linktree">
      {links.map((link) => (
        <Link key={link.id} title={link.title} link={link.url} />
      ))}
    </div>
  );
}

Linktree.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
