import styled from "styled-components";
import {
  Box,
  Typography,
  Button,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import theme from "../../theme/theme";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  border-radius: 0;
`;

export const WelcomeText = styled(Typography)`
  margin-bottom: 30px;
  color: ${theme.palette.primary.main};
`;

export const HeaderText = styled(Typography)`
  margin-bottom: 50px;
`;

export const FormControlStyled = styled(FormControl)`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
`;

export const ButtonContainer = styled(Box)`
  width: 100%;
`;

export const ButtonStyled = styled(Button)`
  height: 55px;
  width: 100%;
  margin: auto;
`;

export const CircularProgressStyled = styled(CircularProgress)`
  color: ${theme.palette.primary};
  top: 50%;
  left: 50%;
  margin-top: -12;
  margin-left: -12;
`;
