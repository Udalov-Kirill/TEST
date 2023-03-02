import React from 'react';
import './App.css';
import MyName1 from "./Components/Myname/MyName1";
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList/ToDoList";


function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
        <ToDoList/>
    </div>
  );
}

export default App;
