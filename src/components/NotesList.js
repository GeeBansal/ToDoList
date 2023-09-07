import React, { useContext } from "react";
import NoteContext from "../store/note";
import NoteItem from "./NoteItem";



const NotesList = () => {
  const noteCtx = useContext(NoteContext);
  console.log(noteCtx);
  const deleteHandler=(id)=>{
    noteCtx.removeNote(id);
  }
  return (
    <ul>
      {noteCtx.notes.notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          content={note.content}
          id={note.id}
          onDelete={deleteHandler.bind(null,note.id)}
        />

      ))}
  
    </ul>
  );
};

export default NotesList;
