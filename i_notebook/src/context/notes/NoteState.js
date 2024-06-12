import React, {useState} from "react";
import Notecontext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "6663050b9cfcc872de72bd68",
          "user": "6661aebe92055df84bdbfcb2",
          "title": "My Note",
          "description": "Please access the Playlist",
          "tag": "YouTube",
          "date": "2024-06-07T13:03:07.611Z",
          "__v": 0
        },
        {
          "_id": "666305249cfcc872de72bd6a",
          "user": "6661aebe92055df84bdbfcb2",
          "title": "My Note Updated",
          "description": "Please access the Playlist updated",
          "tag": "YouTube.in",
          "date": "2024-06-07T13:03:32.162Z",
          "__v": 0
        },
        {
          "_id": "6663050b9cfcc872de72bd68",
          "user": "6661aebe92055df84bdbfcb2",
          "title": "My Note",
          "description": "Please access the Playlist",
          "tag": "YouTube",
          "date": "2024-06-07T13:03:07.611Z",
          "__v": 0
        },
        {
          "_id": "666305249cfcc872de72bd6a",
          "user": "6661aebe92055df84bdbfcb2",
          "title": "My Note Updated",
          "description": "Please access the Playlist updated",
          "tag": "YouTube.in",
          "date": "2024-06-07T13:03:32.162Z",
          "__v": 0
        },

        {
          "_id": "6663050b9cfcc872de72bd68",
          "user": "6661aebe92055df84bdbfcb2",
          "title": "My Note",
          "description": "Please access the Playlist",
          "tag": "YouTube",
          "date": "2024-06-07T13:03:07.611Z",
          "__v": 0
        },
        {
          "_id": "666305249cfcc872de72bd6a",
          "user": "6661aebe92055df84bdbfcb2",
          "title": "My Note Updated",
          "description": "Please access the Playlist updated",
          "tag": "YouTube.in",
          "date": "2024-06-07T13:03:32.162Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

        return(
    <Notecontext.Provider value={{notes, setNotes}}>
        {props.children}
    </Notecontext.Provider>
        )
}

export default NoteState;