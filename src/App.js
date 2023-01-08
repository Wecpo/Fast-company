import React from "react";
import Users from "./app/layouts/users";
import NavBar from "./app/components/navBar";
import Login from "./app/layouts/login";
import Main from "./app/layouts/main";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" exact component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/users" component={Users} />
                <Route path="/" component={Main} />
            </Switch>
        </>
    );
}

export default App;
