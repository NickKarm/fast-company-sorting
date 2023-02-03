import React  from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route, Switch} from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import UserInfo from "./components/userInfo";
import useUsers from "./components/useUsers";

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component ={Main}/>
                <Route path="/login" component ={Login}/>
                <Route path="/users/:userId?" component ={useUsers}/>
            </Switch>
        </>
    );    
}

export default App;