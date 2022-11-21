import React from "react";

const BookMark = ({ status, onToggleBookMark }) => {
  if (status) {
    return (
      <td>
        <i
          className="bi bi-patch-check-fill"
          onClick={onToggleBookMark}
        ></i>
      </td>
    );
  } else {
    return (
      <td>
        <i className="bi bi-patch-check" onClick={onToggleBookMark}></i>
      </td>
    );
  }
};

export default BookMark;
