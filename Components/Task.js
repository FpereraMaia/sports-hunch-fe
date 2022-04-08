import { Avatar, Box } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task(props) {
  const { id, index, title, crest, isNotDraggable } = props;
  let style = {
    backgroundColor: "white"
  };

  const getTaskList = () => {
    return (
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: "white",
          borderBottom: "1px solid",
          padding: "5px",
          margin: "2px"
        }}
      >
      {index + 1}º
      <Avatar sx={{ width: 24, height: 24 }} alt={title} src={crest} />

      <div>
        {title}
      </div>

      </Box>
    )
  }

  if(isNotDraggable) {
    return getTaskList();
  }

  return (
    <Draggable draggableId={id} index={index} type="TASK" key={id}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          { getTaskList() }
        </div>
      )}
    </Draggable>
  );
}

export default Task;
