import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import NoteCreation from './components/NoteCreation';
import Note from './components/Note';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NoteCreation onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
    </div>
  );
}

export default App;
