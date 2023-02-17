import { useState } from "react";

function App() {
  const [toDo, setToDo ] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); //비워주기
    
  };


  return (
    <div>
      <h1># My To Do List ({toDos.length})#</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your TODO..."
        ></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
