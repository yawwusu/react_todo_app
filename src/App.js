import React from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo.js';
import './App.css';
import db from './firebase.js';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');
  
  // when the app loads, listen to database and fetch new todos as they get added or removed
  React.useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      console.log('firebase', snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = function(event) {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
    })
    setInput('');
  }

  const handleInputChange = function(event) {
    setInput(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Efya</h1>
      </header>
      <main className="App-body">
        <form>
          <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input values={input} onChange={handleInputChange} />
          </FormControl>

          <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">
            Add Todo
          </Button>
        </form>
        <ul>
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
