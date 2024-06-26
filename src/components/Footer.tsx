import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  backgroundSite: {
    width: "100%",
    padding: theme.spacing(4),
    backgroundColor: "#070f13",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1de9b6",
    },
  },
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <footer>
        <Box
          className={classes.backgroundSite}
          style={{ padding: theme.spacing(4), backgroundColor: "#04080a" }}
        >
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Home • Suporte • Marketing • Seja Cliente Termos de Uso • Politicas
            de Privacidade
            <br /> © Reservify • 2024
          </Typography>
        </Box>
      </footer>
    </ThemeProvider>
  );
};
