import React from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const PageConfig = {
  pages: [
    {
      id: 1,
      label: 'Home',
      routerLink: '/home',
    },
    {
      id: 2,
      label: 'Task',
      routerLink: '/task',
    },
    {
      id: 3,
      label: 'User',
      routerLink: '/user',
    },
  ],
};

function Nav() {
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    themeColorBg: {
      height: '30px',
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid gray',
    },
  }));

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  const classes = useStyles();

  return (
    <div className="flex-align full-width">
      <div className="menu">
        <List component="nav" className="flex">
          {PageConfig.pages.map((item) => {
            return (
              <NavLink
                className="List_item_hover"
                activeClassName="selected menu_select"
                style={{ width: '100%' }}
                to={item.routerLink}
                key={item.id}
              >
                <ListItem className="list_item_icon" button>
                  <Tooltip
                    title={<span className="fs-12">{item.label}</span>}
                    placement="bottom"
                  >
                    <ListItemText className="w-100">
                      <b className="nav-label">{item.label}</b>
                    </ListItemText>
                  </Tooltip>
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
      <div className="flex-end">
        <Button
          variant="contained"
          color=""
          className={classes.themeColorBg}
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
export default Nav;
