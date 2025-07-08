import './App.css';
import { useState } from 'react'

function App() {
  const [task, setTaks] = useState([]);
  const [newTask, setNewTaks] = useState('');

  const handleClick = () => {
    setTaks([...task, newTask]);
  }

  const handleChange = (evt) => {
    setNewTaks(evt.target.value);
  }

  const handleDelete = (newTaks) => {
    setTaks(task.filter((item) => item !== newTaks));
  }

  return (
    <div className="App">
      <div className='addTasks'></div>
      <input type='string' onChange={handleChange} />
      <button className='add' onClick={handleClick}>Add Task</button>
      <div className='list'>{
        task.map((name, key) => {
          return (
            <div key={key}>
              {name}
              <button onClick={() => handleDelete(name)}>X</button>
            </div>
          )
        })
      }</div>
    </div>
  );
}

export default App;
