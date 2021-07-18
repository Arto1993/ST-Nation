import React from "react";
import { Box } from "@material-ui/core";
import {
  Container,
  WelcomeContainer,
  WelcomeText,
  WelcomeButton,
  FormContainer,
  Description,
} from "./LoginStyled";

import SignIn from "../../components/SignInForm/SignIn";
import SignUp from "../../components/SignUpForm/SignUp";

const LoginForm = () => {
  const [isSignIn, setisSignIn] = React.useState(false);
  const [isSignUp, setisSignUp] = React.useState(false);

  const handleOnSignInButtonClicked = () => {
    setisSignIn(!isSignIn);
    setisSignUp(false);
  };

  const handleOnSignUpButtonClicked = () => {
    setisSignUp(!isSignUp);
    setisSignIn(false);
  };

  return (
    <Container>
      <FormContainer isSignUp={isSignUp}>
        {isSignUp && <SignUp />}
      </FormContainer>
      <WelcomeContainer elevation={3} isSignIn={isSignIn} isSignUp={isSignUp}>
        <Box>
          <WelcomeText variant="h3">Welcome back!</WelcomeText>
          <WelcomeButton
            variant="outlined"
            onClick={handleOnSignUpButtonClicked}
          >
            Sign Up
          </WelcomeButton>
          <WelcomeButton
            variant="outlined"
            onClick={handleOnSignInButtonClicked}
          >
            Sign In
          </WelcomeButton>
        </Box>
        <Description variant="h4">
          Build online courses in minutes and start training today with an
          intuitive platform.
        </Description>
      </WelcomeContainer>
      <FormContainer isSignIn={isSignIn}>
        {isSignIn && <SignIn />}
      </FormContainer>
    </Container>
  );
};

export default LoginForm;
