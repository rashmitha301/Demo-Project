import React, { useState } from 'react';
import { Grid, Card, Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

function Career(props) {
  let history = useHistory();
  let obj = JSON.parse(localStorage.getItem('token'));
  const [state, setState] = useState({
    userName: obj.userName,
    passWord: obj.passWord,
    newPassword: '',
  });
  const useStyles = makeStyles((theme) => ({
    container: {
      width: 'calc(100vw - 20px)',
      flexGrow: 1,
    },
    CardContainer: {
      height: 'calc(100vh - 130px)',
      boxShadow: 'none',
    },
    title: {
      fontSize: 14,
      backgroundColor: 'aliceblue',
    },
    typo: {
      fontFamily: 'mosaik-font-black',
      padding: 15,
    },
    marginLeft: {
      marginLeft: '15%',
    },
    themeBackColor: {
      background: '#ffc500',
    },
    themeColor: {
      color: '#000',
    },
    pieCharts: {
      height: '100%',
      padding: 10,
    },
    mainHeight: {
      height: 'calc(100% - 40px)',
    },
    padding20: {
      padding: '20px',
    },
    marginTop: {
      marginTop: '15%',
      paddingLeft: '20px',
    },
    marginRgt: {
      marginRight: '100px',
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid gray',
    },
    themeColorBg: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid gray',
    },
    disFlx: {
      display: 'flex',
    },
  }));
  const classes = useStyles();
  const [changepwd, setChangepwd] = React.useState(false);

  const handleChangepwd = (e, type) => {
    if (type === 'changePassword') {
      setChangepwd(true);
    } else {
      setState({ ...state, passWord: state.newPassword });
      setChangepwd(false);
    }
  };
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  const handleNewPassword = (e) => {
    setState({ ...state, newPassword: e.target.value });
  };

  return (
    <Grid item className={classes.container}>
      <Card className={classes.CardContainer}>
        <Grid item container lg={12} md={12} sm={12}>
          <Grid item lg={12} md={12} sm={12} className={classes.title}>
            <Typography className={classes.typo} variant="h5">
              User Profile
            </Typography>
          </Grid>
          <Grid
            item
            lg={12}
            className="full-width fullHeight dash-card-content"
          >
            <Grid item container lg={12} className={classes.pieCharts}>
              <Grid
                item
                lg={12}
                md={12}
                className={`background-white ${classes.mainHeight} overflow-auto `}
              >
                <Grid item container lg={12} className={classes.padding20}>
                  <Grid>
                    <Grid>
                      <Grid className={classes.disFlx}>
                        <Typography className={classes.padding20}>
                          Username :
                        </Typography>
                        <Typography className={classes.padding20}>
                          {state.userName}
                        </Typography>
                      </Grid>
                      {changepwd ? (
                        <Grid className={classes.disFlx}>
                          <Typography className={classes.padding20}>
                            New Password:
                          </Typography>
                          <TextField
                            id="customAlertTitle"
                            className="inputCustom"
                            margin="normal"
                            value={
                              changepwd ? state.newPassword : state.passWord
                            }
                            variant="outlined"
                            aria-label="minimum height"
                            onChange={(e) => handleNewPassword(e)}
                          />
                        </Grid>
                      ) : (
                        <Grid className={classes.disFlx}>
                          <Typography className={classes.padding20}>
                            Password :
                          </Typography>
                          <Typography className={classes.padding20}>
                            {changepwd ? state.newPassword : state.passWord}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                    <Grid className={classes.marginTop}>
                      <Button
                        variant="contained"
                        color=""
                        disabled={changepwd && state.newPassword === ''}
                        className={classes.marginRgt}
                        onClick={(e) =>
                          handleChangepwd(
                            e,
                            changepwd ? 'savePassword' : 'changePassword',
                          )
                        }
                      >
                        {changepwd ? 'Save Password' : 'Change Password'}
                      </Button>
                      <Button
                        variant="contained"
                        color=""
                        className={classes.themeColorBg}
                        onClick={(e) => handleLogout(e)}
                      >
                        Logout
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
export default Career;
