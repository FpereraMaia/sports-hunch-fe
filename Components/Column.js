import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Column(props) {
  const { droppableId, list, type } = props;

  let style = {
    backgroundColor: "orange",
  };

  return (
    <Droppable droppableId={droppableId} type={type}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>

          {list.map((val, index) => {
            return (
              <Task id={val.team_id.toString()} key={val.team_id.toString()} index={index} title={val.name} crest={val.crest} style={style}/>
            );
          })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
