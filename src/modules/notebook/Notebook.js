import React from "react";
import { connect } from "react-redux";

import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  notePaperGrid: {
    height: "100%"
  }
});

class Notebook extends React.Component {
  render() {
    return (
      <div className={classNames.notePaperGrid}>
        <Grid
          classes={classNames.notePaperGrid}
          container
          direction="row"
          spacing={24}
        >
          <Grid item xs={6}>
            <Paper className={classNames.paper}>
              <Paper>
                <Typography variant="h4">
                  {this.props.currentNotebook
                    ? this.props.currentNotebook.title
                    : "Loading..."}
                </Typography>
              </Paper>{" "}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classNames.paper}>
              <Typography variant="h4">Edit Note</Typography>
              <Typography>Loading...</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.notes
});

const mapDispatchToProps = {};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notebook)
);
