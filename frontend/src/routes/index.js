import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/incidents/" component={Profile} />
    </Switch>
  );
}
