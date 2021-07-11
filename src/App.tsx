import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';


import { useStyles } from './style';

import lancerImg from './assets/lancerevo.png'

export function App() {
  const classes = useStyles();
  function press() {
    console.log("clicou");
    
  }

  return (

    <div>

      {/* Vehicles Category List */}
      <Grid container spacing={2} className={classes.vehCategory}>
        <Grid item className={classes.categoryItem}>All</Grid>
        <Grid item className={classes.categoryItem}>Sedans</Grid>
        <Grid item className={classes.categoryItem}>Supers</Grid>
        <Grid item className={classes.categoryItem}>Compacts</Grid>
        <Grid item className={classes.categoryItem}>Suvs</Grid>
        <Grid item className={classes.categoryItem}>Motocycles</Grid>
        <Grid item className={classes.categoryItem}>Sport Classics</Grid>
        <Grid item className={classes.categoryItem}>OffRoad</Grid>
        <Grid item className={classes.categoryItem}
        // onClick={() => {
        //   console.log("✔️ This works on every component!");
        // }}
        >
          Coupes
        </Grid>
      </Grid>

      {/* Vehicle Info */}
      {/* <Grid container >
        <Grid item>
          <h1>$1.000,000</h1>
          <h3>Handling</h3>
        </Grid>

      </Grid> */}













      {/* <Grid container spacing={2} className={classes.vehContainer}>
        <Grid item>
          <Paper className={classes.paper}>
            <img src={lancerImg} alt="" className={classes.vehImg}/>
            1
          </Paper>
        </Grid>

        <Grid item>
          <Paper className={classes.paper}>2</Paper>
        </Grid>

        <Grid item>
          <Paper className={classes.paper}>3</Paper>
        </Grid>

        <Grid item>
          <Paper className={classes.paper}>4</Paper>
        </Grid>

        <Grid item>
          <Paper className={classes.paper}>5</Paper>
        </Grid>

        <Grid item>
          <Paper className={classes.paper}>6</Paper>
        </Grid>

      </Grid> */}
    </div>
  );
}
