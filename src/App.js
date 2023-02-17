import Button from "./Button"; // 2. Component를 import한다. 
import style from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={style.title}>Hello</h1>
      <Button text="NEXT"/>
    </div>
  );
}

export default App;
