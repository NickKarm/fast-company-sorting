import React, { useState, useEffect } from "react";
import api from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserInfo = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    let [msg, setMsg] = useState("...Loading");
    useEffect(() => {
        setTimeout(() => {
            msg = `user id: ${userId} is not found`;
            setMsg(msg);
        }, 3000);
    }, [msg]);
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    const handleSave = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <>
                <div>
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name} </h2>
                    <QualitiesList qualities={user.qualities} />
                    <h4>Встретился раз: {user.completedMeetings}</h4>
                    <h1>Оценка: {user.rate}</h1>
                </div>
                <button
                    onClick={() => {
                        handleSave();
                    }}
                >
                    Все пользователи
                </button>
            </>
        );
    }
    return <h1>{msg}</h1>;
};

export default UserInfo;
