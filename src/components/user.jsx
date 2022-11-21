import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = (props) => {
  return (
    <tbody>
      <tr key={props._id}>
        <td key={props._id}>{props.name}</td>
        <Quality quality={props.qualities} />
        <td>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate + " / 5"}</td>
        <Bookmark
          status={props.bookmark}
          onToggleBookMark={() => props.onToggleBookMark(props._id)}
        />
        <td>
          <button
            onClick={() => props.onDelete(props._id)}
            className="badge bg-danger"
          >
            delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
