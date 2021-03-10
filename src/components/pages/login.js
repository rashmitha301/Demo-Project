import React, { useState } from 'react';
import loginSideImg from '../../asserts/images/login-side-image.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, Button, TextField } from '@material-ui/core';
import { LOGIN_USER } from '../../store/actions/userAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Login(props) {
  let history = useHistory();
  const [state, setState] = useState({
    userName: '',
    passWord: '',
  });
  const obj = {
    userName: 'Rashmitha',
    passWord: 'Rashmitha123',
    token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJTVVBFUl9BRE1JTiIsInVzZXJuYW1lIjoic3VwZXJhZG1p',
  };
  const useStyles = makeStyles((theme) => ({
    fullHW: {
      height: '100%',
      width: '100%',
    },
    fullDHW: {
      height: '100vh',
      width: '100vw',
    },
    fullH: {
      height: '100%',
    },
    textField: {
      marginLeft: '20px',
      marginRight: '20px',
      borderColor: 'aliceblue',
    },
    button: {
      margin: '20px',
      backgroundColor: 'aliceblue',
      color: '#000',
      height: '50px',
      '&:hover': {
        backgroundColor: '#f0f0f5',
        color: '#616161 !important',
      },
    },
  }));

  const classes = useStyles();

  const updateField = (e, type) => {
    setState({ ...state, [type]: e.target.value });
  };

  const login = (e) => {
    if (state.userName && state.passWord) {
      if (obj.userName === state.userName && obj.passWord === state.passWord) {
        history.push('/home');
        props.logInSuccess(obj);
        localStorage.setItem('token', JSON.stringify(obj));
      }
    }
  };

  return (
    <Grid container className="full_height">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={`${classes.fullHW} "align_center"`}
      >
        <Card className={`${classes.fullDHW} "login_card crd_shadw"`}>
          <Grid
            container
            direction="row"
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`${classes.fullH} "display_flex"`}
          >
            <Grid
              item
              xs={false}
              sm={false}
              className={`${classes.fullH}"img-width-50"`}
              md={6}
              lg={6}
              xl={6}
            >
              <img src={loginSideImg} alt="noImg" className="img-obj" />
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              md={6}
              lg={6}
              xl={6}
              className="width-50 syn-logo"
            >
              <Grid
                container
                className="p-20 align_center"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="p-20"
                >
                  <Typography className="m-l-15 login-txt mosaik-font-b">
                    Please login to continue
                  </Typography>
                  <form className="input-direction">
                    <TextField
                      id="outlined-email-input"
                      label="Username"
                      //value={}
                      className={classes.textField}
                      name="username"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      onChange={(e) => updateField(e, 'userName')}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.themeColor,
                        },
                      }}
                      // value={username}
                    />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      // value={}
                      className={classes.textField}
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      onChange={(e) => updateField(e, 'passWord')}
                      onKeyPress={(event) => {
                        if (
                          event.key === 'Enter' &&
                          event.target.email !== '' &&
                          event.target.password !== ''
                        ) {
                          login();
                        }
                      }}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.themeColor,
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      className={classes.button}
                      onClick={(e) => login(e)}
                      disabled={state.userName === '' || state.passWord === ''}
                    >
                      Login
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  logInSuccess: (user) => dispatch({ type: LOGIN_USER, user: user }),
});
var Auth = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Auth;
