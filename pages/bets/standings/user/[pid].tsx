import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import BetDetailsService from '../../../../services/BetDeailts.service';
import BetsService from '../../../../services/Bets.service';


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
  const SPORTS_HUNCH_API_URL: string = (process.env.SPORTS_HUNCH_API_URL ? process.env.SPORTS_HUNCH_API_URL : "");

  const { pid } = context.query;

  const betDetailsService = new BetDetailsService(SPORTS_HUNCH_API_URL);
  await betDetailsService.getBetStandingsByUser(pid).then(({data}:any) => {
    standings = data;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  })

  const betService = new BetsService(SPORTS_HUNCH_API_URL);
  await betService.getRankingByUser(pid).then(({data}: any) => {
    user = {name: data.user_name};
    total_points = data.total_points;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  });

  return {
    props: {
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
  total_points: number
}

export default function ListUsers({ standings, user, total_points }: Props) {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Link href={`/`}>Página Inicial</Link>
        <Typography variant="h3" component="div" gutterBottom>
          {user.name}
        </Typography>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} sx={{marginBottom: "5px"}}>
            <Grid item md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Pontuação atual
                </Typography>
                <Typography variant="h5" component="div">
                  {total_points}
                </Typography>
              </CardContent>
            </Card>
            </Grid>

          </Grid>

          <Grid item>
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
        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
