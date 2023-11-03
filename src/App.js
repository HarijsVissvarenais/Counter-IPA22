import Comment from "./Comment.js";
import ToDo from "./ToDo.js";
import { useState, useEffect } from "react";
function App() {
  const [todo, setTodo] = useState({});

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");

      const data = await response.json();

      setTodo(data);

      setLoading(false);
    }
    getData(); 
    
  }, [ ] );

  return (
    <div className="App">

<Comment />
      {/* {loading ? <p>Loading...</p> : <ToDo {...todo} />} */}


    </div>
  );
}

export default App;
