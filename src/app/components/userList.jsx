import { useState, React } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../api";
import Quality from "./qualitie";

const UserList = () => {
    const history = useHistory();
    const params = useParams();
    const { userId } = params;
    const [user, setUser] = useState();
    api.users.getById(userId).then((data) => setUser(data));

    const handleUsers = () => {
        history.replace("/users");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>{`Профессия: ` + user.profession.name}</h2>
                {user.qualities.map((qual) => (
                    <Quality
                        key={qual._id}
                        color={qual.color}
                        name={qual.name}
                    />
                ))}
                <p>copletedMeetings: {user.completedMeetings}</p>
                <h1>Rate: {user.rate}</h1>
                <button onClick={handleUsers}>Все Пользователи</button>
            </div>
        );
    } else return <h1>Loading</h1>;
};

export default UserList;
