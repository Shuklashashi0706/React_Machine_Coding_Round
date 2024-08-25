import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [{ id: 1, text: "Start writing your notes" }]
  );
  const [note, setNote] = useState("");
  const handleDeleteNote = (id) => {
    console.log("asd", id);
    const updateNotes = notes.filter((note) => !(note.id === id));
    setNotes(updateNotes);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={() => {
            setNotes([...notes, { id: notes.length + 1, text: note }]);
            setNote("");
          }}
        >
          Add Note
        </button>
      </div>
      <Notes notes={notes} handleDel={handleDeleteNote} setNotes={setNotes} />
    </div>
  );
}

export default App;
