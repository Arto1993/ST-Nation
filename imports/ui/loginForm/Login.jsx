import React from "react";
import {
  Box,
  Paper,
  Button,
  Snackbar,
  InputLabel,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useStyles } from "./styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [errMessage, setError] = React.useState("");

  const [values, setValues] = React.useState({
    password: "",
    mail: "",
    showPassword: false,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    Meteor.loginWithPassword(values.mail, values.password, (err) => {
      if (!err) {
        history.push("/");
      } else {
        setOpen(true);
        setLoading(false);
        setError(err.reason);
      }
    });
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.paperSize} elevation={3} color="primary">
        <Box className={classes.imageBox}>
          <img className={classes.image} src="./logo.png" />
        </Box>
      </Paper>
      <Box className={classes.formBox}>
        <form onSubmit={submit} className={classes.boxLogin}>
          <FormControl className={classes.input} variant="outlined">
            <InputLabel>Email</InputLabel>
            <OutlinedInput
              required
              value={values.mail}
              className={classes.inputItem}
              onChange={handleChange("mail")}
              labelWidth={40}
            />
          </FormControl>
          <FormControl className={classes.input} variant="outlined">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
              required
            />
          </FormControl>
          <Box className={classes.wrapper}>
            <Button
              disabled={loading}
              type="submit"
              className={classes.buttonSize}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                {errMessage}
              </Alert>
            </Snackbar>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
