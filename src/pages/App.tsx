import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  CssBaseline,
  createTheme,
  ThemeProvider,
  TextField,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import backgroundImage from "../assets/restaurant.gif";
import celular from "../assets/reservify_app.png";
import { Sessao } from "../components/primeiro";
import axios from "axios";
import { Navbar } from "../components/NavBar";
import { Alerta } from "../plugins/Alerta";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  heroContent: {
    position: "relative",
    padding: theme.spacing(8, 0, 6),
    color: "#fff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(8px)",
  },
  heroOverlay: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
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
  leftContent: {
    flexBasis: "50%",
    paddingRight: theme.spacing(2),
  },
  rightContent: {
    flexBasis: "50%",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
  },
  formTitle: {
    marginBottom: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
  downButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "transparent",
    color: "white",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    padding: 0,
    top: "70%",
  },
  customDivider: {
    width: "100%",
    borderBottomWidth: "2px",
    alignSelf: "center",
    alignContent: "center",
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

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Salvar = ({ email, nome }: { email: string; nome: string }) => {
  if (!email || !nome) return Alerta().erro("Preencha todos os campos!");

  Alerta().promisse(async () => {
    const res = await axios.post(
      true ? "https://email-service-5.onrender.com/" : "http://localhost:3001",
      {
        email: email,
        nome: nome,
      }
    );
    if (res.status === 200) {
      return Alerta().sucesso("E-mail enviado com sucesso!");
    } else {
      return Alerta().erro("Erro ao enviar e-mail!");
    }
  });
};

export const App = () => {
  const classes = useStyles();
  const [emailEnviar, setEmailEnviar] = useState(
    {} as {
      nome: string;
      email: string;
    }
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className={classes.root}>
        <Navbar />
        <main>
          <Box className={classes.heroContent}>
            <Box className={classes.heroBackground}>
              <img
                src={backgroundImage}
                alt="background"
                className={classes.backgroundImage}
              />
            </Box>
            <Box className={classes.heroOverlay}>
              <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="white">
                  Restaurante Lotado?
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  Cansado de gastar tempo e dinheiro com pedidos de reserva?
                </Typography>
              </Container>
              <Button
                className={classes.downButton}
                onClick={() => scrollToSection("infoSection")}
                sx={{ color: "white", fontSize: "24px" }}
              >
                V
              </Button>
            </Box>
          </Box>
          <Box id="infoSection" className={classes.backgroundSite}>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6} className={classes.leftContent}>
                  <Typography variant="h4" color="primary">
                    Transforme a Gestão de Reservas do Seu Restaurante com o
                    Reservify
                  </Typography>
                  <Typography variant="body1">
                    Gerenciar as reservas em seu restaurante nunca foi tão
                    simples e eficiente. Com o Reservify, você pode:
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body1">
                        <strong>Simplificar Reservas:</strong> Permita que seus
                        clientes façam reservas de forma rápida e intuitiva,
                        diretamente pelo aplicativo.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        <strong>Escolher Mesas:</strong> Ofereça aos seus
                        clientes a opção de escolher a mesa que desejam,
                        melhorando a experiência personalizada.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        <strong>Integração Perfeita:</strong> Integre o
                        Reservify com seu sistema de gerenciamento de
                        restaurantes existente para uma operação fluida.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        <strong>Programas de Fidelidade:</strong> Implemente
                        programas de fidelidade automatizados para recompensar
                        clientes frequentes e aumentar a lealdade.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        <strong>Análises e Relatórios:</strong> Acesse dados
                        analíticos detalhados para entender padrões de reserva e
                        otimizar a capacidade do seu restaurante.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        <strong>Suporte 24/7:</strong> Suporte técnico dedicado
                        disponível sempre que você precisar, garantindo que suas
                        operações nunca sejam interrompidas.
                      </Typography>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={12} md={6} className={classes.rightContent}>
                  <img
                    src={celular}
                    alt="Reservify App"
                    style={{ maxWidth: "100%" }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Divider
            className={classes.customDivider}
            sx={{ backgroundColor: "gray" }}
          />
          <Sessao />
          <Divider
            className={classes.customDivider}
            sx={{ backgroundColor: "gray" }}
          />

          <Video />

          <Box className={classes.backgroundSite}>
            <Container maxWidth="sm" className={classes.formContainer}>
              <Typography
                variant="h4"
                align="center"
                color="primary"
                className={classes.formTitle}
              >
                Seja nosso cliente!
              </Typography>
              <Typography variant="body1" align="justify">
                Preencha o formulário abaixo para receber um e-book gratuito nosso e descubra como você pode transformar a sua empresa com uma nova forma de gestão de reservas em seu restaurante.
              </Typography>
              <form noValidate autoComplete="off">
                <Box sx={{marginTop: "12px", display: "flex", justifyContent: "center" }}></Box>
                <Grid container spacing={2}>
                  {" "}
                  {/* Ajuste o spacing conforme necessário */}
                  <Grid item xs={12}>
                    <TextField
                      label="Nome Completo"
                      variant="outlined"
                      fullWidth
                      required
                      className={classes.formField}
                      onChange={(e) => {
                        setEmailEnviar({
                          ...emailEnviar,
                          nome: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="E-mail"
                      variant="outlined"
                      fullWidth
                      required
                      className={classes.formField}
                      onChange={(e) => {
                        setEmailEnviar({
                          ...emailEnviar,
                          email: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Telefone"
                      variant="outlined"
                      fullWidth
                      required
                      className={classes.formField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.formButton}
                      onClick={() => {
                        Salvar(emailEnviar);
                      }}
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Box>
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
