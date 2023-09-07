import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


import classes from './NoteItem.module.css';

const NoteItem = (props) => {
    
  return (
    <li  className={classes.note} >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={props.onDelete} ><DeleteIcon/></button>
    </li>
  )
}

export default NoteItem