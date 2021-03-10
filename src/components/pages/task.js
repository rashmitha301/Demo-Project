import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  TableHead,
  Button,
  Popover,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import axios from 'axios';

function Inbox(props) {
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
    themeColorBg: {
      backgroundColor: '#cc0000',
      color: '#fff',
    },
    dspAdd: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: '13px',
    },
    disFlx: {
      display: 'flex',
    },
    padding20: {
      padding: '20px',
    },
    marpad: {
      marginTop: 'auto',
      padding: '20px',
      width: '14%',
    },
    dspSave: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: '13px',
    },
  }));
  const classes = useStyles();

  const tabelHeader = [
    { key: 'Id' },
    { key: 'Title' },
    { key: 'Status' },
    { key: '' },
  ];
  const [state, setState] = useState({
    id: '',
    title: '',
    completed: '',
  });
  const [tableData, setTableData] = useState([]);
  const [showPopover, setShowPopover] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const gitHubUrl = 'http://jsonplaceholder.typicode.com/todos';
  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setTableData(response.data);
  };
  useEffect(() => {
    getGiHubUserWithAxios();
  }, []);

  const handleCloseOtrs = (val, ind) => {
    let arr = [...tableData];
    arr = arr.filter((item) => item !== val);
    setTableData(arr);
  };
  const handleTask = (event) => {
    setShowPopover(true);
    setAnchorEl(event.currentTarget);
  };
  const handleSave = (e) => {
    let obj = { id: state.id, title: state.title, completed: state.completed };
    let arr = [obj, ...tableData];
    setTableData(arr);
    setAnchorEl(null);
  };
  function handleClose() {
    setAnchorEl(null);
  }
  const handleChange = (e, type) => {
    setState({ ...state, [type]: e.target.value });
  };

  const InboxTable = () => {
    return (
      <TableContainer component={Paper} className={classes.tableHeight}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {tabelHeader &&
                tabelHeader.length > 0 &&
                tabelHeader.map((val, ind) => {
                  return (
                    <TableCell
                      width={ind === '1' ? '10%' : ''}
                      key={ind}
                      align="left"
                    >
                      {val.key}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData &&
              tableData.length > 0 &&
              tableData.map((val, ind) => {
                return (
                  <React.Fragment key={ind}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {val.id}
                      </TableCell>
                      <TableCell width="35%" component="th" scope="row">
                        {val.title}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {val.completed === false ? 'False' : 'True'}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Button
                          variant="contained"
                          color=""
                          className={classes.themeColorBg}
                          onClick={(e) => handleCloseOtrs(val, ind)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                );
              })}
          </TableBody>
        </Table>
        {tableData && tableData.length === 0 && (
          <div align="center" className="p-15">
            No records found
          </div>
        )}
      </TableContainer>
    );
  };
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.padding20}
        >
          <Grid className={classes.disFlx}>
            <Typography className={classes.marpad}>Id</Typography>
            <TextField
              id="customAlertTitle"
              className="inputCustom"
              margin="normal"
              variant="outlined"
              aria-label="minimum height"
              onChange={(e) => handleChange(e, 'id')}
            />
          </Grid>
          <Grid className={classes.disFlx}>
            <Typography className={classes.marpad}>Title</Typography>
            <TextField
              id="customAlertTitle"
              className="inputCustom"
              margin="normal"
              variant="outlined"
              aria-label="minimum height"
              onChange={(e) => handleChange(e, 'title')}
            />
          </Grid>
          <Grid className={classes.disFlx}>
            <Typography className={classes.marpad}>Status</Typography>
            <TextField
              id="customAlertTitle"
              className="inputCustom"
              margin="normal"
              variant="outlined"
              aria-label="minimum height"
              onChange={(e) => handleChange(e, 'completed')}
            />
          </Grid>
          <Grid className={classes.dspSave}>
            <Button
              variant="contained"
              color=""
              className={classes.themeColorBg}
              onClick={(e) => handleSave(e)}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Popover>
      <Grid item className={classes.container}>
        <Card className={classes.CardContainer}>
          <Grid item container lg={12} md={12} sm={12}>
            <Grid item lg={12} md={12} sm={12} className={classes.title}>
              <Typography className={classes.typo} variant="h5">
                Tasks Information
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              className="full-width fullHeight dash-card-content"
            >
              <Grid item container lg={12} className={classes.dspAdd}>
                <Button
                  variant="contained"
                  color=""
                  className={classes.themeColorBg}
                  onClick={(e) => handleTask(e)}
                >
                  Add Task
                </Button>
              </Grid>
              <Grid item container lg={12} className={classes.pieCharts}>
                <Grid
                  item
                  lg={12}
                  md={12}
                  className={`background-white ${classes.mainHeight} overflow-auto `}
                >
                  <Grid item container lg={12}>
                    <InboxTable />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
export default Inbox;
