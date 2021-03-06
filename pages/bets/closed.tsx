import * as React from 'react';
import ReactEcharts from "echarts-for-react"; 
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, CardContent, Grid, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import StandingsService from '../../services/Standings.service';
import BetsService from '../../services/Bets.service';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BetDetailsService from '../../services/BetDeailts.service';
import moment from 'moment';

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

export async function getServerSideProps() {
  let ranking = {};
  let currentStandings = {};
  let history = {};

  const SPORTS_HUNCH_API_URL: string = (process.env.SPORTS_HUNCH_API_URL ? process.env.SPORTS_HUNCH_API_URL : "");

  const betService = new BetsService(SPORTS_HUNCH_API_URL);
  await betService.getCurrentRanking().then(({data}:any) => {
    ranking = data;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  });

  const standingsService = new StandingsService(SPORTS_HUNCH_API_URL);
  await standingsService.getCurrent().then(({data}:any) => {
    currentStandings = data;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  });

  const betDetailsService = new BetDetailsService(SPORTS_HUNCH_API_URL);
  await betDetailsService.getRankingHistory().then(({data}: any) => {
    history = data;
  }); 

  return {
    props: {
      currentStandings,
      ranking,
      baseApiUrl: SPORTS_HUNCH_API_URL,
      history
    },
  }
}

const theme = createTheme();

interface Props {
  ranking: any,
  currentStandings: any,
  baseApiUrl?: string
  history: any;
}

export default function ListUsers({ ranking, currentStandings, history }: Props) {
  function formatDate(date: moment.MomentInput) {
    return moment(date).format("DD/MM");
  }

  const createdDates = Object.keys(history);
  const xAxis = createdDates.map(created_date => formatDate(created_date))
  
  let series: any[] = [];

  createdDates.forEach(date => {
    const ranking = history[date];
    let position = 1;
    ranking.forEach((rankingData: any) => {
      let filteredSerie = series.find(serie => serie.id === rankingData.user_id);
      
      if(!filteredSerie) {
        series.push({id: rankingData.user_id, name: rankingData.user_name, type: "line", data: [rankingData.total_points]});
      }
      else {
        filteredSerie.data.push(rankingData.total_points)
      }
    });
  });
  
  const option = {
    tooltip: {
      trigger: 'axis',
      order: "valueDesc"
    },
    xAxis: {
      type: 'category',
      data: xAxis
    },
    yAxis: {
      type: 'value'
    },
    series
  }; 


  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Typography variant="h3" component="div" gutterBottom>

      </Typography>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
           <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Regras da pontuação</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <List>
                  <ListItem disablePadding>
                      <ListItemText>- Acertou posição exata na tabela: <b>25 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Acertou posição próxima <b>(Uma acima ou abaixo da apostada)</b> na tabela: <b>10 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Colocou o time no G6: <b>6 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Colocou o time no Z4: <b>6 pontos</b></ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemText>- Colocou o time entre a 7ª e 12ª posições: <b>2 pontos</b></ListItemText>
                  </ListItem>
                </List>

              </AccordionDetails>
            </Accordion>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table" sx={{bgcolor: "#f0f0f0"}}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Pontuação</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ranking.map((row: any) => (
                    <TableRow
                      key={row.user_name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        {row.user_name}
                      </TableCell>
                      <TableCell>{row.total_points}</TableCell>
                      <TableCell>
                        <Link href={`/bets/standings/user/${row.user_id}`}>Ver aposta</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                Evolução do Ranking 
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary" >
                (Passe o mouse por cima do gráfico)
              </Typography>
              <Typography variant="h5" component="div">
                <ReactEcharts option={option} />
              </Typography>
            </CardContent>

          </Grid>
          <Grid item xs={12} sm={12} md={8} >
          <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Classificação</TableCell>
                    <TableCell>P</TableCell>
                    <TableCell>J</TableCell>
                    <TableCell>V</TableCell>
                    <TableCell>E</TableCell>
                    <TableCell>D</TableCell>
                    <TableCell>GP</TableCell>
                    <TableCell>GC</TableCell>
                    <TableCell>SG</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>Últ. Jogos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentStandings.map((row: any) => (
                    <TableRow
                      key={row.position}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        {row.position} {row.team_name}
                      </TableCell>
                      <TableCell>{row.points}</TableCell>
                      <TableCell> {row.games} </TableCell>
                      <TableCell> {row.won} </TableCell>
                      <TableCell> {row.drawn} </TableCell>
                      <TableCell> {row.lost} </TableCell>
                      <TableCell> {row.goal_for} </TableCell>
                      <TableCell> {row.goal_against} </TableCell>
                      <TableCell> {row.goal_difference} </TableCell>
                      <TableCell> {row.points_percentage} </TableCell>
                      <TableCell> {row.last_results} </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
