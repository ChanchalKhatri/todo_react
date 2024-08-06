import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/save", note);
    } catch (error) {
      alert("failed");
    }
  };
  return (
    <reactFragment>
      <div className="wrapper">
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="note">
              <input
                type="text"
                name="note"
                id="note"
                placeholder="Enter your note"
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
            </label>
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    </reactFragment>
  );
};

export default App;
