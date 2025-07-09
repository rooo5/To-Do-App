import './App.css';

const ShowTask = (props, key) => {
    return (
        <div key={key} id='task' style={{ backgroundColor: props.completed ? "#b4f8c8" : " #f0f0f0" }}>
            {<button onClick={() => props.handleCompeleted(props.id)} id='compelet-button'>{props.completed ? "✅" : "◻️"}</button>}
            <p className="task-name"> {props.name}</p>
            <button onClick={() => props.handleDelete(props.id)} id='remove-button' style={{ backgroundColor: props.completed && "#b4f8c8" }}>❌</button>
        </div>
    )
}

export default ShowTask