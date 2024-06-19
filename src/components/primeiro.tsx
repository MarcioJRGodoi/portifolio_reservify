import React from "react";
import { Box, Container, createTheme, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    backgroundColor: "#2C2C2C",
    padding: theme.spacing(4),
  },
  image: {
    width: "100%",
    height: "auto",
  },
  textContainer: {
    color: "white",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    letterSpacing: "0.1em", // Ajuste o valor conforme necessário
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));

export const Sessao = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={""} alt="Pessoa Servindo" className={classes.image} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.textContainer}>
            <Typography variant="h4" className={classes.title}>
              NOSSO OBJETIVO
            </Typography>
            <Typography
              variant="body1"
              className={classes.text}
              style={{ letterSpacing: "0.05em" }}
            >
              <strong>
                Trazemos praticidade pra você que leva uma vida dinâmica.
              </strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.text}
              style={{ letterSpacing: "0.1em" }}
            >
              Queremos te proporcionar uma reserva sem estresse, minimizando o
              tempo perdido para que você possa aproveitá-lo intensamente da
              maneira que preferir.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
