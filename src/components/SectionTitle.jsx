import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="max-w-3xl mx-auto px-2 text-center">
      <h2 className="md:text-4xl sm:text-3xl text-xl font-bold text-center">
        {title}
      </h2>
      <p className="sm:text-lg text-base mt-2">{description}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SectionTitle;
