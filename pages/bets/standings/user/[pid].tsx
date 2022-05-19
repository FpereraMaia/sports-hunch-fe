import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UsersService from '../../../../services/Users.service';
import { Avatar, Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import BetDetailsService from '../../../../services/BetDeailts.service';


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

interface Team {
  team_id: number;
  name: string;
  abbreviation: string;
  crest: string;
  created_at: string;
  updated_at: string;
}

interface Standing {
  id: number;
  position: string;
  team: Team;
}

export async function getServerSideProps(context: any) {
  let standings;
  let user;
  const SPORTS_HUNCH_API_URL: string = (process.env.SPORTS_HUNCH_API_URL ? process.env.SPORTS_HUNCH_API_URL : "");

  const { pid } = context.query;

  const betDetailsService = new BetDetailsService(SPORTS_HUNCH_API_URL);
  await betDetailsService.getBetStandingsByUser(pid).then(({data}:any) => {
    standings = data;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  })

  const userService = new UsersService(SPORTS_HUNCH_API_URL);
  await userService.getById(pid).then(({data}: any) => {
    user = data;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  });

  return {
    props: {
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
  user: any
}

export default function ListUsers({ standings, user }: Props) {
  const teams = standings.map(standing => standing.team);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Link href={`/`}>Página Inicial</Link>
        <Typography variant="h3" component="div" gutterBottom>
          {user.name}
        </Typography>
        <CssBaseline />
        <Grid container>

          <Grid>
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

                    <Avatar sx={{ width: 24, height: 24 }} alt={row.team.name} src={row.team.crest} />

                    <div>
                      {row.team.name}
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
