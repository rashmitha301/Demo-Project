import React, { Suspense } from 'react';
import { Switch, HashRouter, BrowserRouter, Route } from 'react-router-dom';
import { Aux } from '../components/auxulary/auxulary';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Home from '../components/pages/home';
import Task from '../components/pages/task';
import User from '../components/pages/user';

function AuthContainer(props) {
  return (
    <Aux>
      <BrowserRouter>
        <HashRouter>
          <Suspense fallback={<p>Loading...</p>}>
            <div id="content">
              <Header props={props} />
              <div className="content">
                <div className="right-Content">
                  <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/task" component={Task} />
                    <Route exact path="/user" component={User} />
                  </Switch>
                </div>
              </div>
              <Footer />
            </div>
          </Suspense>
        </HashRouter>
      </BrowserRouter>
    </Aux>
  );
}

export { AuthContainer };
