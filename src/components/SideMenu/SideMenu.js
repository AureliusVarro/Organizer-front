import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Calendar from "../Calendar/Calendar";
import { renderToStaticMarkup } from "react-dom/server";
import { Button } from "@material-ui/core";

class SideMenu extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Grid container direction="column" spacing={8}>
            <Button variant="contained" color="primary">
              Calendar
            </Button>
            <Button variant="contained" color="primary">
              TODO
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Calendar />
        </Grid>
      </Grid>
    );
  }
}

export default SideMenu;
