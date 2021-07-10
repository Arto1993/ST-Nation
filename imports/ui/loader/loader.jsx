import React from "react";
import { Typography, Box, LinearProgress } from "@material-ui/core";

import { useStyles } from "./styles";

const Loader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.conteiner}>
        <img className={classes.logoImage} src="/logo.png" />
        <Box className={classes.inHeaderBox}>
          <Typography className={classes.header} variant="subtitle1">
            Instigate Mobile
          </Typography>
          <Typography variant="subtitle2" className={classes.miniHeader}>
            Workflow Builder
          </Typography>
        </Box>
        <LinearProgress style={{ height: "2px" }} />
      </Box>
    </Box>
  );
};

export default Loader;
