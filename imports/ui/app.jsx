import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import PrivateRout from "./routes/PrivateRout";
// import { Process } from "./process/process";
import LoginForm from "./containers/LoginPage/Login";

function App() {
  const whiteMod = createTheme(theme);
  const [darkModOn, setDarkMod] = React.useState(false);

  return (
    <ThemeProvider theme={whiteMod}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRout
            exact
            path="/"
            // component={}
            setDarkMod={setDarkMod}
            darkModOn={darkModOn}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export { App };
