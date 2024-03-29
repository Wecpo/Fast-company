import React from "react";
import useMockDate from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = useMockDate();
    const handleClick = () => {
        console.log(`clicked`);
        initialize();
    };
    return (
        <div className="containter mt-5">
            <h1>Main Page</h1>
            <h3>Инициализация данных в FireBase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>error : {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Инициализировать
            </button>
        </div>
    );
};

export default Main;
