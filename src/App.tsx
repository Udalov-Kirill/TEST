import React from 'react';
import './App.css';
import MyName1 from "./Components/Myname/MyName1";
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList/ToDoList";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function App() {
  return (
    <div>
      {/*<Counter/>*/}
          {/*<ToDoList/>*/}
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Checkbox {...label} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Checkbox {...label} />
          <div><Button variant="contained">Contained</Button></div>
    </div>
  );
}

export default App;
