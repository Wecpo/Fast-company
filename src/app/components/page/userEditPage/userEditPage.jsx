import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import API from "../../../api";

const UserEditPage = () => {
    const { userId } = useParams();
    const history = useHistory();

    const [professions, setProfessions] = useState([]);
    const [qualities, setQualities] = useState([]);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        profession: {
            name: "",
            _id: ""
        },
        sex: "",
        qualities: []
    });

    useEffect(() => {
        API.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                _id: data[professionName]._id,
                label: data[professionName].name,
                value: data[professionName].name
            }));
            setProfessions(professionsList);
        });
        API.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
        API.users.getById(userId).then((data) => {
            const newQuailities = data.qualities.map((item) => {
                return { label: item.name, value: item._id, color: item.color };
            });
            setUserData({
                name: data.name,
                email: data.email,
                profession: {
                    name: data.profession.name,
                    _id: data.profession._id
                },
                sex: data.sex,
                qualities: newQuailities
            });
        });
    }, []);

    const handleChange = (target) => {
        if (target.name === "profession") {
            setUserData((prevState) => ({
                ...prevState,
                [target.name]: { name: target.value, _id: "" }
            }));
        }

        setUserData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleClick = () => {
        const thisProf = professions.find((item) => {
            return item.label === userData.profession;
        });

        const newData = {
            name: userData.name,
            email: userData.email,
            profession: {
                _id: thisProf._id,
                name: thisProf.label
            },
            qualities: userData.qualities.map((item) => {
                const newQualForStart = {
                    _id: item.value,
                    name: item.label,
                    color: item.color
                };
                return newQualForStart;
            }),
            sex: userData.sex
        };

        API.users.update(userId, newData);
        history.goBack();
    };

    return (
        userData.name && (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 .offset-md-3 shadow p-4">
                        <TextField
                            label="Имя"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                        />
                        <SelectField
                            onChange={handleChange}
                            options={professions}
                            name="profession"
                            defaultOption="Choose..."
                            value={userData.profession.name}
                            label="Выберите свою профессию"
                        />
                        <RadioField
                            options={[
                                { name: "Male", value: "male" },
                                { name: "Female", value: "female" },
                                { name: "Other", value: "Other" }
                            ]}
                            value={userData.sex}
                            name="sex"
                            onChange={handleChange}
                            label="Выберите ваш пол"
                        />
                        <MultiSelectField
                            options={qualities}
                            onChange={handleChange}
                            defaultValue={userData.qualities}
                            name="qualities"
                            label="Выберите ваши качества"
                        />
                        <button onClick={handleClick}>Обновить</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default UserEditPage;
