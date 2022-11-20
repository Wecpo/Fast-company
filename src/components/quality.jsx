import React from "react";

const Quality = ({ quality }) => {
  return (
    <td>
      {quality.map((quality) => {
        return (
          <span key={quality._id} className={"badge m-1 bg-" + quality.color}>
            {quality.name}{" "}
          </span>
        );
      })}
    </td>
  );
};

export default Quality;
