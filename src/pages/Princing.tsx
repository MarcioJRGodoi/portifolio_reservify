// src/components/Pricing.js
import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Carousel from 'react-material-ui-carousel'; // Importe o componente de carrossel

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1de9b6",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});

type PlanProps = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
};

const Plan = ({ title, price, features, buttonText }: PlanProps) => (
  <Box
    sx={{
      padding: 4,
      textAlign: "center",
      border: "1px solid #ccc",
      borderRadius: 2,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 4,
    }}
  >
    <Typography variant="h6" sx={{ marginBottom: 5, fontWeight: "bold" }}>
      {title}
    </Typography>
    <Typography
      sx={{
        fontSize: 24,
        marginBottom: 5,
        color: "#1de9b6",
      }}
    >
      {price}
    </Typography>
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        textAlign: "left",
        marginBottom: 3,
      }}
    >
      {features.map((feature, index) => (
        <li key={index} style={{ marginBottom: 1 }}>
          {feature}
        </li>
      ))}
    </ul>
    <Button
      variant="contained"
      sx={{ marginTop: "auto", backgroundColor: "#1de9b6", color: "#fff" }}
    >
      {buttonText}
    </Button>
  </Box>
);

const testimonials = [
  {
    quote: "O aplicativo é fantástico e a equipe de suporte é extremamente prestativa!",
    author: "Cliente Satisfeito",
  },
  {
    quote: "Melhor serviço de reservas que já usei, super recomendo!",
    author: "Outro Cliente Satisfeito",
  },
  {
    quote: "As funcionalidades avançadas do plano Empresarial são essenciais para o meu negócio.",
    author: "Cliente Empresarial",
  },
  // Adicione mais depoimentos aqui se desejar
];

const TestimonialCarousel = () => (
  <Carousel
    autoPlay
    indicators={false}
    navButtonsAlwaysVisible
    animation="fade"
    navButtonsProps={{
      style: {
        backgroundColor: 'transparent',
        color: '#1de9b6',
        borderRadius: 50,
        margin: 10,
      }
    }}
    sx={{
      maxWidth: 600,
      margin: '0 auto',
      textAlign: 'center',
      '& .carousel-item': {
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }
    }}
  >
    {testimonials.map((testimonial, index) => (
      <Box key={index} className="carousel-item" sx={{ padding: 3 }}>
        <Typography sx={{ fontStyle: "italic", marginBottom: 3 }}>
          "{testimonial.quote}"
        </Typography>
        <Typography>- {testimonial.author}</Typography>
      </Box>
    ))}
  </Carousel>
);

export const Pricing = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Container
        sx={{
          flexGrow: 1,
          paddingTop: 10,
          paddingBottom: 8,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 6 }}>
          Planos de Preços
        </Typography>
        <Grid container spacing={6} justifyContent="center" sx={{ marginTop: 5, marginBottom: 5 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Plan
              title="Gratuito para Usuários"
              price="R$ 0/mês"
              features={[
                "Reserve mesas gratuitamente",
                "Suporte via email",
                "Acesso básico ao app",
              ]}
              buttonText="Baixar App"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Plan
              title="Plano Básico para Restaurantes"
              price="R$ 120/mês"
              features={[
                "Perfil de restaurante personalizado",
                "Acesso ao painel de reservas",
                "Suporte via email",
              ]}
              buttonText="Assinar"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Plan
              title="Plano Profissional para Restaurantes"
              price="R$ 200/mês"
              features={[
                "Perfil de restaurante personalizado",
                "Acesso ao painel de reservas",
                "Suporte prioritário",
                "Marketing e promoções",
              ]}
              buttonText="Assinar"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Plan
              title="Plano Empresarial para Restaurantes"
              price="R$ 300/mês"
              features={[
                "Demais funcionalidades do plano Profissional",
                "Relatórios avançados e análises",
                "Integração com sistemas de gestão",
              ]}
              buttonText="Assinar"
            />
          </Grid>
        </Grid>

        <Divider sx={{ margin: `${8}px 0` }} />

        <Typography variant="h4" sx={{ textAlign: "center", marginTop: 8, marginBottom: 6 }}>
          Como Funciona
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ marginBottom: 3 }}>
              Para Usuários:
            </Typography>
            <Typography>
              O aplicativo é gratuito para usuários finais. Você pode reservar mesas em restaurantes
              parceiros sem custo algum.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ marginBottom: 3 }}>
              Para Restaurantes:
            </Typography>
            <Typography>
              Restaurantes podem escolher entre nossos planos pagos, cada um com diferentes níveis de
              serviço e funcionalidades para gerenciar suas reservas de forma eficiente.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ margin: `${8}px 0` }} />

        <Typography variant="h4" sx={{ textAlign: "center", marginTop: 8, marginBottom: 6 }}>
          Depoimentos de Clientes
        </Typography>
        <TestimonialCarousel />

        <Divider sx={{ margin: `${8}px 0` }} />

        <Typography variant="h4" sx={{ textAlign: "center", marginTop: 8, marginBottom: 6 }}>
          Perguntas Frequentes
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ marginBottom: 3, paddingLeft: 2, paddingRight: 2 }}>
              <Typography variant="h6">O que está incluído no plano gratuito para usuários?</Typography>
              <Typography>
                O plano gratuito para usuários inclui a capacidade de reservar mesas em restaurantes
                parceiros sem custo algum.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 3, paddingLeft: 2, paddingRight: 2 }}>
              <Typography variant="h6">Quais são as opções de planos para restaurantes?</Typography>
              <Typography>
                Oferecemos três planos pagos para restaurantes: Básico, Profissional e Empresarial,
                cada um com diferentes níveis de serviço e funcionalidades para gerenciar reservas.
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 3, paddingLeft: 2, paddingRight: 2 }}>
              <Typography variant="h6">Posso alterar meu plano de restaurante a qualquer momento?</Typography>
              <Typography>
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento através das
                configurações do app.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
