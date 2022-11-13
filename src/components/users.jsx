import React, { useState } from "react";
import api from "../api";

const Users = () => {
  function classes(quality) {
    let classes = "badge m-1 bg-";
    return (classes += quality.color);
  }

  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((item) => item._id !== id));
  };

  const renderPhrase = (number) => {
    if (number === 0) {
      return <span className="badge bg-danger">Никто с тобой не тусанет</span>;
    }
    if (number === 2 || number === 3 || number === 4) {
      return (
        <span className="badge bg-primary">
          {number} Человека потусит с тобой сегодня
        </span>
      );
    } else {
      return (
        <span className="badge bg-primary">
          {number} Человек потусит с тобой сегодня
        </span>
      );
    }
  };

  if (users.length > 0) {
    return (
      <div>
        <div>{renderPhrase(users.length)}</div>
        <table key="table1" className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td key={user._id}>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span key={quality._id} className={classes(quality)}>
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate + " / 5"}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="badge bg-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>{renderPhrase(users.length)}</div>;
  }
};

export default Users;
