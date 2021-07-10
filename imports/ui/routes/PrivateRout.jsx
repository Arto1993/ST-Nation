import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Box } from "@material-ui/core";

import Loader from "../loader/loader";
// import { Header } from "../header/header";
// import { useStyles } from "../themes/styles";

const PrivateRout = ({ exact, path, component }) => {
//   const classes = useStyles();

  const { user, isLoggingIn } = useTracker(() => {
    const isLoggingIn = Meteor.loggingIn();

    return {
      isLoggingIn,
      user: Meteor.user(),
    };
  });

  if (isLoggingIn) {
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  }

  return user ? (
    <React.Fragment>
      {/* <Header>
        <Box className={classes.container}>
          <Route exact={exact} path={path} component={component} />
        </Box>
      </Header> */}
    </React.Fragment>
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRout;
