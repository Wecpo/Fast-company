import React from "react";

const SearchStatus = ({ length }) => {
  if (length === 0) {
    return <span className="badge bg-danger">Никто с тобой не тусанет</span>;
  }
  if (length === 2 || length === 3 || length === 4) {
    return (
      <span className="badge bg-primary">
        {length} Человека тусанут с тобой сегодня
      </span>
    );
  } else {
    return (
      <span className="badge bg-primary">
        {length} Человек тусанет с тобой сегодня
      </span>
    );
  }
};

export default SearchStatus;
