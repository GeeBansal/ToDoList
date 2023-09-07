import { useReducer } from "react"
import NoteContext from "./note"

const defaultNoteState={
    notes:[]  // id title content
}
const noteReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedNotes=state.notes.concat(action.value);
        return {
            notes:updatedNotes
        }
    }
    if(action.type==='REMOVE'){
        const updatedNotes=state.notes.filter(note=>note.id!==action.id)
        return{
            notes:updatedNotes
        }
    }

    return defaultNoteState
}

const NoteProvider=props=>{

    const [noteState,dispatchNote]=useReducer(noteReducer,defaultNoteState)
    const addNote=(note)=>{
        dispatchNote({type:'ADD',value:note})
    }
    const removenote=(id)=>{
        dispatchNote({type:'REMOVE',id:id})
    }

    const noteContext={
        notes:noteState,
        addNote:addNote,
        removeNote:removenote
    }

    return(
    <NoteContext.Provider value={noteContext}>
        {props.children}
    </NoteContext.Provider>)
}

export default NoteProvider