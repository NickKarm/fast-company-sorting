import React from "react";
import Users from "./users";
import UserInfo from "./userInfo";
import { useParams } from "react-router-dom";

const useUsers = ({ match }) => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserInfo userId={userId} /> : <Users />}</>;
};

export default useUsers;
