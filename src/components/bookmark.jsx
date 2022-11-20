import React from "react";

const BookMark = ({ status, ...rest }) => {
  if (status) {
    return (
      <td>
        <i
          className="bi bi-patch-check-fill"
          onClick={rest.onToggleBookMark}
        ></i>
      </td>
    );
  } else {
    return (
      <td>
        <i className="bi bi-patch-check" onClick={rest.onToggleBookMark}></i>
      </td>
    );
  }
};

export default BookMark;
