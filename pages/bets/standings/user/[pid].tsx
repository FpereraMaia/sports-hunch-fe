import * as React from 'react';
import ReactEcharts from "echarts-for-react"; 
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import BetDetailsService from '../../../../services/BetDeailts.service';
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

interface Standing {
  id: number;
  position: string;
  team_name: string;
  team_crest: string;
}

export async function getServerSideProps(context: any) {
  let standings;
  let user;
  let total_points;
  let history;

  const SPORTS_HUNCH_API_URL: string = (process.env.SPORTS_HUNCH_API_URL ? process.env.SPORTS_HUNCH_API_URL : "");

  const { pid } = context.query;

  const betDetailsService = new BetDetailsService(SPORTS_HUNCH_API_URL);
  await betDetailsService.getBetStandingsByUser(pid).then(({data}:any) => {
    standings = data.bet_standings;
    total_points = data.total_points;
    user = {name: data.user_name}
  }).catch((error: any) => {
    console.log(error);
    throw error;
  })

  await betDetailsService.getRankingHistoryByUser(pid).then(({data}: any) => {
    history = data;
  })

  return {
    props: {
      history,
      total_points,
      user,
      standings,
      baseApiUrl: SPORTS_HUNCH_API_URL
    },
  }
}

const theme = createTheme();

interface Props {
  standings: Standing[],
  baseApiUrl?: string,
  user: any,
  total_points: number,
  history: any
}

export default function ListUsers({ standings, user, total_points, history }: Props) {
  function formatDate(date: moment.MomentInput) {
    return moment(date).format("DD/MM");
  }

  const xAxis = history.map((data: { created_at: any; }) => formatDate(data.created_at));
  const yAxis = history.map((data: { total_points: any; }) => data.total_points);

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: "Pontos",
        data: yAxis,
        type: 'line'
      }
    ]
  }; 

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Link href={`/`}>Página Inicial</Link>
        <Typography variant="h3" component="div" gutterBottom>
          {user.name}
        </Typography>
        <CssBaseline />
        <Grid container>
          <Grid item xs={2}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    {standings.map((row: Standing) => (
                      <TableRow
                        key={row.position}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" sx={{padding: "0px"}}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: "white",
                            padding: "5px",
                            margin: "2px"
                          }}
                        >
                        {row.position}º

                        <Avatar sx={{ width: 24, height: 24 }} alt={row.team_name} src={row.team_crest} />

                        <div>
                          {row.team_name}
                        </div>

                        </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
            </Grid>
            <Grid item xs={9} sx={{marginBottom: "5px", marginLeft: "5px"}}>
              <Grid item md={12}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Pontuação atual
                    </Typography>
                    <Typography variant="h5" component="div">
                      {total_points}
                    </Typography>
                  </CardContent>
              </Grid>
              <hr/>
              <Grid item md={12}>
                 <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Histórico de pontuação
                    </Typography>
                    <Typography variant="h5" component="div">
                      <ReactEcharts option={option} />
                    </Typography>
                  </CardContent>
                  
              </Grid>
          </Grid>

          
      
        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
