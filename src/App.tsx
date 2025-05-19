import './App.css'
import {Task, Todolist} from "./Todolist.tsx";

function App() {
    // Data
    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to buy"
    const tasks_1: Task[] = [
        // {id: 1, title: "HTML&CSS", isDone: true},
        // {id: 2, title: "JS", isDone: true},
        // {id: 3, title: "React", isDone: false},
    ]
    const tasks_2: Task[] = [
        {id: 4, title: "Beer", isDone: true},
        {id: 5, title: "Chips", isDone: true},
        {id: 6, title: "Dried fish", isDone: false},
        {id: 7, title: "Very dried fish", isDone: false},
    ]
    // UI
    return (
        <div className="app">
            <Todolist title={todolistTitle_1} tasks={tasks_1}/>
            <Todolist title={todolistTitle_2} tasks={tasks_2}/>
        </div>
    )
}

export default App
