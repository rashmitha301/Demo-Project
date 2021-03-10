import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContainer, UnAuthContainer } from './index';

const Routes = (props) => {
  const user = JSON.parse(localStorage.getItem('token'));
  if (!user) return UnAuthRoutes(props);
  return AuthRoutes(props);
};

const AuthRoutes = (props) => {
  const user = JSON.parse(localStorage.getItem('token'));
  const { ...rest } = props;
  return (
    <Route
      {...rest}
      render={(prop) =>
        user.token ? (
          <AuthContainer {...prop} {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const UnAuthRoutes = (props) => {
  const { ...rest } = props;
  return (
    <Route
      {...rest}
      render={(prop) => <UnAuthContainer {...prop} {...rest} {...props} />}
    />
  );
};

export { Routes, AuthRoutes, UnAuthRoutes };
