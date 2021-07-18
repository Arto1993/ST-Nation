import React from "react";
import {
  Snackbar,
  InputLabel,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
  FormContainer,
  HeaderText,
  FormControlStyled,
  ButtonContainer,
  ButtonStyled,
  CircularProgressStyled,
} from "./SignInStyled";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignIn = () => {
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
    <FormContainer onSubmit={submit}>
      <HeaderText variant="subtitle2">Sign In</HeaderText>
      <FormControlStyled variant="outlined">
        <InputLabel>Email</InputLabel>
        <OutlinedInput
          required
          value={values.mail}
          onChange={handleChange("mail")}
          labelWidth={40}
        />
      </FormControlStyled>
      <FormControlStyled variant="outlined">
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
      </FormControlStyled>
      <ButtonContainer>
        <ButtonStyled
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </ButtonStyled>
        {loading && (
          <CircularProgressStyled size={24} />
        )}
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {errMessage}
          </Alert>
        </Snackbar>
      </ButtonContainer>
    </FormContainer>
  );
};

export default SignIn;
