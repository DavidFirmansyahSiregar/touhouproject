import React from "react";
import Draggable, {DraggableCore} from "react-draggable";
import "./animation.css";


export const Loading = () => {
  const eventHandler = (e, data) => {
    console.log('Event Type', e.type);
    console.log({e, data});
  }
  return (
    <Draggable onDrag={eventHandler}>
    <div className="loader">
        Now Loading
    </div>
    </Draggable>
  )
}