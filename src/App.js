import React from "react";
import Users from "./app/layouts/users";
import NavBar from "./app/components/ui/navBar";
import Login from "./app/layouts/login";
import Main from "./app/layouts/main";
import UserEditPage from "./app/components/page/userEditPage/userEditPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./app/hooks/useProfession";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <ProfessionProvider>
                    <Route
                        path="/users/:userId?/edit"
                        exact
                        component={UserEditPage}
                    />
                    <Route path="/users/:userId?" exact component={Users} />
                    <Route path="/login/:type?" component={Login} />
                </ProfessionProvider>
                <Route path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </div>
    );
}

export default App;
