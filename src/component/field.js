import React, { useState, useRef } from 'react';
import './App.css';
 
const App = () => {
  
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['1','2','3','4','5','6','7','8','9','10', ]);
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
 
  return (
    <>
    {
    list&&
    list.map((item, index) => (
      <div 
        className='arow'
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {item}
      </div>
      ))}
    </>
  );
};
export default App;