import './index.css';
import { useTranslation } from 'react-i18next';
import { Route, Switch, Redirect } from 'react-router-dom';
import { setLocale } from 'yup';
import SignInPage from 'Pages/Auth/SignInPage';
import { useEffect, useState } from 'react';
import { http } from 'Utils/Http/Http';
import App from 'App';
import { LinearProgress } from '@mui/material';
import { AuthContext } from 'Contexts/AuthContext';
import GuardedRoute from 'Utils/Guards/GuardedRoute';
import AuthGuard from 'Utils/Guards/AuthGuard';
import GuestGuard from 'Utils/Guards/GuestGuard';
import SendResetLinkPage from 'Pages/Auth/SendResetLinkPage';
import ResetPasswordPage from 'Pages/Auth/ResetPasswordPage';

setLocale({
  mixed: {
    required: 'required',
  },
  string: {
    required: 'required',
  },
});

function Entry() {
  const { t } = useTranslation();
  const [isFetchingUserData, setIsFetchingUserData] = useState(true);
  const [auth, setAuth] = useState({
    user: null,
    fetchUserProfile: () => {
      return http
        .get('/admin/get-profile')
        .then((response) => {
          setAuth({ ...auth, user: response.data.data });
        })
        .catch(() => {
          setAuth({ ...auth, user: null });
        });
    },
    // refreshCsrf: () => {
    //     return http.get(`/sanctum/csrf-cookie`, {
    //         baseURL: process.env.REACT_APP_BASE_URL,
    //     });
    // },
  });

  useEffect(() => {
    setIsFetchingUserData(true);
    auth.fetchUserProfile().finally(() => setIsFetchingUserData(false));
    // auth.refreshCsrf();
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {isFetchingUserData ? (
        <div className="h-screen flex justify-center items-center">
          <LinearProgress variant="query" className="w-72" />

        </div>) : (
        <Switch>
          <GuardedRoute
            guards={[GuestGuard]}
            exact
            path="/sign-in"
            component={SignInPage}
          />
          <Route exact path="/forgot-password" component={SendResetLinkPage} />
          <Route exact path="/reset-password/:token/user/:emailId" component={ResetPasswordPage} />
          <Route exact path="/" render={() => {
            return (
              //   isFetchingUserData ?
              // <Redirect to="/si" /> :
              <Redirect to="/admin" />
            )
          }} />
          <GuardedRoute guards={[AuthGuard]} path="/admin" component={App} />
          {/* <Route path="/admin" component={App} /> */}
        </Switch>
      )}
    </AuthContext.Provider>
  );
}

export default Entry;
