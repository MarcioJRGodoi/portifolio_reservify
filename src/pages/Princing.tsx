import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { Navbar } from "../components/NavBar";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  plan: {
    padding: theme.spacing(2),
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  planTitle: {
    marginBottom: theme.spacing(2),
  },
  planPrice: {
    fontSize: "24px",
    marginBottom: theme.spacing(2),
  },
  planFeatures: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
  },
  feature: {
    marginBottom: theme.spacing(1),
  },
  planButton: {
    marginTop: theme.spacing(2),
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

export const Pricing = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Planos de Preços
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className={classes.plan}>
              <Typography variant="h6" className={classes.planTitle}>
                Básico
              </Typography>
              <Typography className={classes.planPrice}>R$ 29/mês</Typography>
              <ul className={classes.planFeatures}>
                <li className={classes.feature}>5 reservas por mês</li>
                <li className={classes.feature}>Suporte via email</li>
                <li className={classes.feature}>Acesso básico ao app</li>
              </ul>
              <Button
                variant="contained"
                color="primary"
                className={classes.planButton}
              >
                Assinar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.plan}>
              <Typography variant="h6" className={classes.planTitle}>
                Profissional
              </Typography>
              <Typography className={classes.planPrice}>R$ 59/mês</Typography>
              <ul className={classes.planFeatures}>
                <li className={classes.feature}>20 reservas por mês</li>
                <li className={classes.feature}>Suporte prioritário</li>
                <li className={classes.feature}>Acesso completo ao app</li>
              </ul>
              <Button
                variant="contained"
                color="primary"
                className={classes.planButton}
              >
                Assinar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.plan}>
              <Typography variant="h6" className={classes.planTitle}>
                Empresarial
              </Typography>
              <Typography className={classes.planPrice}>R$ 99/mês</Typography>
              <ul className={classes.planFeatures}>
                <li className={classes.feature}>Reservas ilimitadas</li>
                <li className={classes.feature}>Suporte dedicado</li>
                <li className={classes.feature}>Funcionalidades avançadas</li>
              </ul>
              <Button
                variant="contained"
                color="primary"
                className={classes.planButton}
              >
                Assinar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
