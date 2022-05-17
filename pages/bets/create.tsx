import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../../Components/Column';
import TeamsService from '../../services/Teams.service';
import { Card, CardContent, CircularProgress, List, ListItem, ListItemText, Modal } from '@mui/material';
import BetsService from '../../services/Bets.service';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Sports Hunch
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export async function getStaticProps() {
  let teams;
  const SPORTS_HUNCH_API_URL: string = (process.env.SPORTS_HUNCH_API_URL ? process.env.SPORTS_HUNCH_API_URL : "");

  const teamService = new TeamsService(SPORTS_HUNCH_API_URL);
  await teamService.getAll().then(({data}:any) => {
    teams = data;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  })

  return {
    props: {
      teams,
      baseApiUrl: SPORTS_HUNCH_API_URL
    },
  }
}

const theme = createTheme();

export default function SignInSide({ teams, baseApiUrl }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <Box>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regra 1
                </Typography>
                <Typography variant="h5" component="div">
                  Data e horário final para cadastro da aposta
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  O sistema aceitará cadastros até às 16:00 do dia 09/04/2022 horário de Brasília.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regra 2
                </Typography>
                <Typography variant="h5" component="div">
                  Pontuação
                </Typography>

                <List>
                  <ListItem disablePadding>
                      <ListItemText>- Acertou posição exata na tabela: <b>25 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Acertou posição próxima <b>(Regra 3)</b> na tabela: <b>10 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Colocou o time no G6: <b>6 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Colocou o time no Z4: <b>6 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Colocou o time entre o 7ª e 12ª posições: <b>2 pontos</b></ListItemText>
                  </ListItem>
                </List>

              </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regra 3
                </Typography>
                <Typography variant="h5" component="div">
                  Posição próxima
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  É considerado posição próxima aquela que está 1 posição acima ou abaixo da posição apostada
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regra 4
                </Typography>
                <Typography variant="h5" component="div">
                  Pontuação NÃO acumulativa
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  A pontuação não é acumulativa, ou seja, caso acerte a posição do time e ele esteja indo para a libertadores valerá a pontuação maior, no caso, 25 pontos
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regra 5
                </Typography>
                <Typography variant="h5" component="div">
                  Do Sistema utilizado
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Essa aplicação não faz gestão financeira e não trata com nenhum tipo de movimentação financeira. O usuário que cadastrar a sua aposta concorda com as regras descritas.
                </Typography>
              </CardContent>
            </Card>
            </Box>
      </Grid>

    </ThemeProvider>
  );
}
