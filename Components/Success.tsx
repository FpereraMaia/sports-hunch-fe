import { Alert, Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Task from "./Task";

function Success(props: any) {
  const { teamList, betCode } = props;

  const style = {

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style}>
      { window.scrollTo(0, 0) }
      <Alert severity="success" sx={{margin: '10px auto'}}>Sua aposta foi cadastrada com sucesso. </Alert>

      <Avatar sx={{ width: 300, height: 300, margin: '10px auto' }} alt={'campeao 2021'} src={'/campeao-2021-turndown-for-what.jpg'} />
      <Typography variant="caption" display="block" gutterBottom>
        Um pequena homenagem ao grande campeão de 2021 Raphael Martins!
      </Typography>

      <Typography id="modal-modal-title" variant="h6" component="h2" sx={{borderTop: '2px solid'}}>
        Obrigado pela sua aposta, ela foi salva com sucesso. <b>Em breve lançaremos a página de acompanhamento de pontos.</b>
        <br/>
        Sua aposta está abaixo para conferência, e o Código da aposta é: <b>#{("0000" + betCode).slice(-4)}</b>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {teamList.map((val: any, index: any) => {
        return (
          <Task id={val.team_id.toString()} key={val.team_id.toString()} index={index} title={val.name} crest={val.crest} style={style} isNotDraggable={true} />
        );
      })}
    </Typography>
  </Box>
  );
}

export default Success;
