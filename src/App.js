import React from 'react';
import { Aux } from '../src/components/auxulary/auxulary';
import { connect } from 'react-redux';
import { Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import { Routes } from './routers/index';
import './App.css';

function App(props) {
  return (
    <Aux>
      <BrowserRouter>
        <HashRouter>
          <Switch>
            <Routes {...props} />
          </Switch>
        </HashRouter>
      </BrowserRouter>
    </Aux>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...state, ownProps };
};

export default connect(mapStateToProps)(App);
