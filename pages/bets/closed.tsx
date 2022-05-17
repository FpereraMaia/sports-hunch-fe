import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UsersService from '../../services/Users.service';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

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

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export async function getServerSideProps() {
  let users;
  const SPORTS_HUNCH_API_URL: string = (process.env.SPORTS_HUNCH_API_URL ? process.env.SPORTS_HUNCH_API_URL : "");

  const userService = new UsersService(SPORTS_HUNCH_API_URL);
  await userService.getAll().then(({data}:any) => {
    users = data;
  }).catch((error: any) => {
    console.log(error);
    throw error;
  })

  return {
    props: {
      users,
      baseApiUrl: SPORTS_HUNCH_API_URL
    },
  }
}

const theme = createTheme();

interface Props {
  users: User[],
  baseApiUrl: string
}

export default function ListUsers({ users, baseApiUrl }: Props) {

  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Typography variant="h3" component="div" gutterBottom>
        Ranking
      </Typography>
        <CssBaseline />
        <Grid xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Pontuação</TableCell>
                <TableCell align="right">Ver Aposta</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row: User) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{"EM DESENVOLVIMENTO"}</TableCell>
                  <TableCell align="right">
                    <Link href={`/bets/standings/user/${row.id}`}>Ver aposta cadastrada</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
