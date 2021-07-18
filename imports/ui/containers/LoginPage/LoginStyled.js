import styled from "styled-components";
import { Box, Paper, Typography, Button } from "@material-ui/core";
import theme from "../../theme/theme";

export const Container = styled(Box)`
  margin: 0;
  display: flex;
`;

export const WelcomeContainer = styled(Box)`
  transition: all 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 30vw;
  text-align: center;
  justify-content: space-between;
  background-color: ${theme.palette.primary.main};
  width: ${({ isSignIn, isSignUp }) => isSignIn || isSignUp ? "50vw" : "90vw"};
`;

export const WelcomeText = styled(Typography)`
  margin-top: 30px;
  color: ${theme.palette.primary.contrastText};
`;

export const WelcomeButton = styled(Button)`
  margin-top: 30px;
  margin-right: 30px;
  color: ${theme.palette.primary.contrastText};
  border-color: ${theme.palette.primary.contrastText};
`;

export const FormContainer = styled(Box)`
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  width: ${({ isSignIn, isSignUp }) => isSignIn || isSignUp ? "50vw" : "5vw"};
  background-color:  ${({ isSignIn, isSignUp }) => !isSignIn && !isSignUp && `${theme.palette.primary.main}`};
  border-radius: 0;
`;

export const Description = styled(Typography)`
  margin: 50px;
  color: ${theme.palette.primary.contrastText};
`;
