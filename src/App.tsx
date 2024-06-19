import React, { ReactElement, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  CssBaseline,
  createTheme,
  ThemeProvider,
  useScrollTrigger,
  TextField,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "./assets/logo.png";
import backgroundImage from "./assets/restaurant.gif";
import celular from "./assets/reservify_app.png";
import { Sessao } from "./components/primeiro";
import axios from "axios";
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
    color: "#1de9b6",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    padding: 0,
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

interface ElevationScrollProps {
  children: ReactElement;
  window?: () => Window;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "rgba(190,190,190, 1)" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
    },
  });
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Salvar = ({ email, nome }: { email: string; nome: string }) => {
  axios
    .post("https://email-service-5.onrender.com/", {
      email: email,
      nome: nome,
    })
    .then((res) => {
      if (res.status === 200) {
        alert("Email enviado com sucesso!");
      } else {
        alert("Erro ao enviar email!");
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
        <ElevationScroll>
          <AppBar position="fixed"
          style={{ backgroundColor: '#04080a' }}
          >
            <Toolbar disableGutters style={{ display: 'flex', gap: '5px', margin: '10px'}}>
              
              <img src={logo} alt="Reservify Logo" width={35} />

              <Typography
                variant="h6"
                color="white"
                noWrap
                className={classes.title}
              >
                Reservify
              </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
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
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Get Started
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Learn More
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
              <Button
                className={classes.downButton}
                onClick={() => scrollToSection("infoSection")}
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
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
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
              <Typography variant="body1" align="center">
                Preencha o formulário abaixo para agendar uma demonstração
                gratuita do Reservify e descubra como podemos transformar a
                gestão de reservas do seu restaurante.
              </Typography>
              <form noValidate autoComplete="off">
                <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
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
              Home • Suporte • Marketing • Seja Cliente Termos de Uso •
              Politicas de Privacidade
              <br /> © Reservify • 2024
            </Typography>
          </Box>
        </footer>
      </Box>
    </ThemeProvider>
  );
};
