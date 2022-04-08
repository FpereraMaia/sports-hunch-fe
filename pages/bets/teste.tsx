import { Box, Button, Container, createTheme, CssBaseline, Grid, List, ListItem, ListItemText, Tab, TextField, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TeamsService from "../../services/Teams.service";
import Column from "../Components/Column";

const SPORTS_HUNCH_API_URL: string = (process.env.SPORTS_HUNCH_API_URL ? process.env.SPORTS_HUNCH_API_URL : "");

export async function getStaticProps() {

  const teamService = new TeamsService(SPORTS_HUNCH_API_URL);

  let teams;
  await teamService.getAll().then(({data}:any) => {
    teams = data.results;
  }).catch((error: any) => {
    throw error;
  })

  return {
    props: {
      teams
    },
  }
}

export default function Index({ teams }: any) {

  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  let initialState =
    {
      tasks: teams
    };

  const [taskList, setTasks] = useState(initialState);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
     // dropped outside the list
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

  const theme = createTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'top',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  name="nome"
                  autoComplete="nome"
                  size="small"
                />
              </Grid>
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
              <Grid item xs={12}>
                <DragDropContext onDragEnd={onDragEnd}>
                  <div className="wrapper">
                    {winReady ?
                      <Column
                        className="column"
                        droppableId="Meu Palpite"
                        list={taskList.tasks}
                        type="TASK"
                      />
                    : null}
                  </div>
                </DragDropContext>
              </Grid>
            </Grid>

          </Box>

        </Box>
        {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
              Cadastrar Aposta
            </Button> */}
      </Container>
    </ThemeProvider>
  );
}
