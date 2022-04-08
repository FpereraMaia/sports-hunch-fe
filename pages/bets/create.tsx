import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Components/Column';
import TeamsService from '../../services/Teams.service';
import { Card, CardContent, List, ListItem, ListItemText, Modal } from '@mui/material';
import BetsService from '../../services/Bets.service';
import Task from '../Components/Task';


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
    teams = data.results;
  }).catch((error: any) => {
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
  const betsService = new BetsService(baseApiUrl);

  const [winReady, setwinReady] = React.useState(false);

  React.useEffect(() => {
    setwinReady(true);
  }, []);

  let initialState =
    {
      tasks: teams
    };

  const [taskList, setTasks] = React.useState(initialState);
  const [open, setOpen] = React.useState(false);
  const [savedTeamList, setSavedTeamList] = React.useState([]);
  const [betCode, setBetCode] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const bet = {
      email: data.get('email'),
      password: data.get('name'),
      teams: taskList.tasks
    };

    betsService.create(bet).then((response: any) => {
      setSavedTeamList(response.data.teams);
      setBetCode(response.data.id);
      setOpen(true);
    }).catch((error: any) => {
      console.log("DEU ERRADO");
      console.log(error);
    })
  };

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result: any) {
    if (!result.destination) {
     return;
   }

   const tasks = reorder(
     taskList.tasks,
     result.source.index,
     result.destination.index
   );


   setTasks({
     tasks: tasks
   });
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
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
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box component="form" noValidate onSubmit={handleSubmit}
            sx={{
              mx: 4,
              marginTop: "2px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >

            <Box sx={{ margin: "2px auto", display: "flex", flexDirection: 'row' }}>
              <Box sx={{ margin: "auto 20px" }}>
                <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      label="Nome"
                      name="name"
                      autoComplete="name"
                      size="small"
                    />
                  </Grid>
                </Box>
                <Box>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Endereço de e-mail"
                      name="email"
                      autoComplete="email"
                      size="small"
                    />
                  </Grid>
                </Box>
            </Box>
            <Typography variant="overline" display="block" gutterBottom>
              <b>Crie sua tabela arrastando os times para cima ou para baixo</b>
            </Typography>
            <Box>
              <Grid item xs={12}>
                <DragDropContext onDragEnd={onDragEnd}>

                    {winReady ?
                      <Column
                        className="column"
                        droppableId="Meu Palpite"
                        list={taskList.tasks}
                        type="TASK"
                      />
                    : null}

                </DragDropContext>
              </Grid>
            </Box>

            {winReady ?
                 <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
              Cadastrar Aposta
            </Button>
              : null}
            <Copyright sx={{ mt: 5 }} />

          </Box>

        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Obrigado pela sua aposta, ela foi salva com sucesso. <b>Em breve lançaremos a página de acompanhamento de pontos.</b>
            <br/>
            Sua aposta está abaixo, e seu Código da aposta é: <b>#{("0000" + betCode).slice(-4)}</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {savedTeamList.map((val: any, index: any) => {
            return (
              <Task id={val.team_id.toString()} key={val.team_id.toString()} index={index} title={val.name} crest={val.crest} style={style} isNotDraggable={true} />
            );
          })}
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
