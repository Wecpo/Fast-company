import React from "react";
import Users from "./app/layouts/users";
import NavBar from "./app/components/ui/navBar";
import Login from "./app/layouts/login";
import Main from "./app/layouts/main";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./app/hooks/useProfession";
import { QualitiesProvider } from "./app/hooks/useQualities";

function App() {
    return (
        <div>
            <NavBar />

            <QualitiesProvider>
                <ProfessionProvider>
                    <Switch>
                        <Route
                            path="/users/:userId?/:edit?"
                            component={Users}
                        />
                        <Route path="/login/:type?" component={Login} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>
                </ProfessionProvider>
            </QualitiesProvider>

            <ToastContainer />
        </div>
    );
}

export default App;
