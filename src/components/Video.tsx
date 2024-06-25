import React from "react";
import { Box, Container, createTheme, Grid, Typography, Divider } from "@mui/material";
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#1E1E1E",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
  customDivider: {
    width: "100%",
    borderBottomWidth: "2px",
    alignSelf: "center",
    alignContent: "center",
  },
}));


export const Video = () => {
    const classes = useStyles();

    return (
    <>
        <Box className={classes.section}>
            <Container maxWidth="lg">
                <Grid container justifyContent="center">
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h4" gutterBottom>
                    Vídeo de Apresentação
                    </Typography>
                </Grid>
                <Grid item>
                    <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4l8Ix2Yt70c?si=OU_8oqK2SrrDzhZE&amp;"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                </Grid>
                </Grid>
            </Container>
    </Box>

    <Divider
    className={classes.customDivider}
    sx={{ backgroundColor: "gray" }}
    />
    </>
    );


};