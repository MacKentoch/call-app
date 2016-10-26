import React, { PropTypes } from 'react';

const SearchButton = ({ buttonText, onClick }) => {
  return (
    <button
      className="btn btn-block orange_button"
      type="button"
      onClick={onClick} >
      { buttonText }
    </button>
  );
};

SearchButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchButton;
