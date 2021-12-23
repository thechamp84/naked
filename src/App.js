import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AppLayout from 'Layouts/AppLayout';
import SignInPage from 'Pages/Auth/SignInPage';
import { NavLinks } from 'Constants/NavLinks';
import UserPage from 'Pages/User/UserPage';

export default function App() {
    let { path } = useRouteMatch();

    return (
        <AppLayout links={NavLinks}>
            <Switch>
                <Route exact path={`${path}/sign-in`} component={SignInPage} />
                <Route exact path={`${path}`} component={UserPage} />
                <Route exact path={`${path}/user`} component={UserPage} />
            </Switch>
        </AppLayout>
    );
}
