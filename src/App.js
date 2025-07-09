import './App.css';
import { useState } from 'react'
import ShowTask from "./ShowTask";

function App() {
  const [task, setTaks] = useState([]);
  const [newTask, setNewTaks] = useState('');

  const clearInput = () => {
    setNewTaks('')
  }
  const handleClick = () => {
    if (newTask.trim() === '') return;

    const objTask = {
      id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
      name: newTask,
      completed: false,
    }
    setTaks([...task, objTask]);
    clearInput();
  }

  const handleCompeleted = (id) => {
    task.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    })
    setTaks([...task]);
  }

  const handleChange = (evt) => {
    setNewTaks(evt.target.value);
  }

  const handleDelete = (id) => {
    setTaks(task.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>To Do List</h1>
      </div>
      <div className='addTasks'>
        <input
          id='input-bar'
          type='string'
          value={newTask}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick();
            }
          }}
          placeholder='Enter the task' />
        <button className='add' onClick={handleClick} >Add</button>
      </div>
      <div className='list'>{
        task.map((task, key) => {
          return (
            <ShowTask key={key} name={task.name} id={task.id} completed={task.completed} handleDelete={handleDelete} handleCompeleted={handleCompeleted} />
          )
        })
      }</div>
    </div>
  );
}

export default App;
