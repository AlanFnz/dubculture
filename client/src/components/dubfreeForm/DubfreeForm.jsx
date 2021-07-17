import React from "react";
import PropTypes from "prop-types";
import "./DubfreeForm.scss";

export function DubfreeForm({ dubfree }) {
  return (
    <div className="cnt-dubfreeform">
      <p>Dubfree</p>
    </div>
  );
}

DubfreeForm.propTypes = {
  dubfree: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};
