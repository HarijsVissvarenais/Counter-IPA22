
import ToDo from "./ToDo.js";
import { useState } from "react";
function App() {
  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };


  return (
    <div className="App">
  <ToDo />
      
      <h1>Markuss = OJ</h1>
    </div>
  );
}

export default App;
