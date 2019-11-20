import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

export const Routes = () => {
  const guestRoutes = () => {
    return (
      <>
        <Route path="/signup" component={Pages.Signup} />
        <Route path="/login" component={Pages.Login} />
        <Route component={Pages.Signup} />
      </>
    );
  };

  const userRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Pages.Home} />
        <Route
          path="/characters/:id"
          render={() => <Pages.ShowPage name="hellooooo" />}
        />
      </>
    );
  };
  return <Switch>{localStorage.token ? userRoutes() : guestRoutes()}</Switch>;
};
