import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Licenca from './pages/Licenca';

const ApplicationRoutes = () => (
  <Layout>
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/licenca' component={Licenca} />
  </Layout>
);

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={SignIn} />

    <ApplicationRoutes />
  </Switch>
);

export default Routes;
