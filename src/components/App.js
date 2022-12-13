// import React from "react";
import { useState } from "react";
import "../assets/css/App.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const userData = [
  { username: "test", email: "test@gmail.com" },
  { username: "test2", email: "test2@gmail.com" },
  { username: "test3", email: "test3@gmail.com" },
];

export default function App() {
  const [users, setUsers] = useState(userData);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    // console.log(result);
    const items = [...users];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setUsers(items);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="columnContainer">
        <Droppable droppableId="users">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h2>Column 1</h2>
              {users.map((user, index) => (
                <Draggable
                  key={index}
                  draggableId={`user-draggable-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="userContainer"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div>username: {user.username}</div>
                      <div>email: {user.email}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
