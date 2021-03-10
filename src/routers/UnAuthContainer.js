import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';
// Importing file through lazy loding
const Login = lazy(() => import('../components/pages/login'));

function UnAuthContainer(props) {
  return (
    <div id="content">
      <HashRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export { UnAuthContainer };
