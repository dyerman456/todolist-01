import './App.css'
import {Task, Todolist} from "./Todolist.tsx";

function App() {
    // Data
    const tasks: Task[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ]

    function removeTask(id: number) {
        let resultTasks = tasks.filter( () => {true} )
        console.log(resultTasks)
    }

    // UI
    return (
        <div className="app">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
        </div>
    )
}

export default App
