import React from "react";
import Users from "./app/layouts/users";
import NavBar from "./app/components/ui/navBar";
import Login from "./app/layouts/login";
import Main from "./app/layouts/main";
import UserEditPage from "./app/components/page/userEditPage/userEditPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./app/hooks/useProfession";
import { QualitiesProvider } from "./app/hooks/useQualities";

function App() {
    return (
        <div>
            <NavBar />
            <ProfessionProvider>
                <QualitiesProvider>
                    <Switch>
                        <Route
                            path="/users/:userId?/edit"
                            exact
                            component={UserEditPage}
                        />
                        <Route path="/users/:userId?" exact component={Users} />
                        <Route path="/login/:type?" component={Login} />

                        <Route path="/" component={Main} />
                        <Redirect to="/" />
                    </Switch>
                </QualitiesProvider>
            </ProfessionProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
