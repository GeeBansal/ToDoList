import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import classes from "./Note.module.css";
import NoteContext from "../store/note";

const Note = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showTitle, setShowTitle] = useState(false);

  const noteCtx=useContext(NoteContext)

  const submitHandler=(event)=>{
    event.preventDefault();
    noteCtx.addNote({
      id:Math.random().toString(),
      title:title,
      content:content
    })

    setTitle('');
    setContent('');

  }
  return (
    <form className={classes['create-note']} onSubmit={submitHandler}>
      {showTitle && (
        <input
          type="text"
          placeholder="Title...."
          value={title}
          className={classes.input}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      )}
      <textarea
        rows={!showTitle?"1":"3"}
        placeholder="Take a Note...."
        value={content}
        onClick={() => {
          setShowTitle(true);
        }}
        className={classes.input}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    <button className={classes.button}>
        <AddIcon />
      </button>
    </form>
  );
};

export default Note;
