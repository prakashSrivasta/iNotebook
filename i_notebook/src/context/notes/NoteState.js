import React, { useState } from "react";
import Notecontext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

   //Get Note
   const getNote = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MWFlYmU5MjA1NWRmODRiZGJmY2IyIn0sImlhdCI6MTcxNzY3Nzc2OH0.SshDQAv5DFDEZ-dUhMgFxckvEmnCPz_wsuwF8L83s1A",
      },   
    });
    const json = await response.json()
    // console.log(json);
    setNotes(json);
  }

  //Add Note
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MWFlYmU5MjA1NWRmODRiZGJmY2IyIn0sImlhdCI6MTcxNzY3Nzc2OH0.SshDQAv5DFDEZ-dUhMgFxckvEmnCPz_wsuwF8L83s1A",
      },   
      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });

    const note = await response.json();
    setNotes(notes.concat(note));  
  };
  //Delete Note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MWFlYmU5MjA1NWRmODRiZGJmY2IyIn0sImlhdCI6MTcxNzY3Nzc2OH0.SshDQAv5DFDEZ-dUhMgFxckvEmnCPz_wsuwF8L83s1A",
      },   
    });
    const json = response.json();
    console.log(json)
    console.log("Deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = async(id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2MWFlYmU5MjA1NWRmODRiZGJmY2IyIn0sImlhdCI6MTcxNzY3Nzc2OH0.SshDQAv5DFDEZ-dUhMgFxckvEmnCPz_wsuwF8L83s1A",
      },
      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
     // Logic to edit client
  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if (element._id === id) {
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].tag = tag;
      break;
    }
    setNotes(newNotes);
  }
  };

 

  return (
    <Notecontext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
