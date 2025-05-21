import './App.css'
import {Task, Todolist} from "./Todolist.tsx";
import {useState} from "react";

export type FilterValuesType = "all" | "completed" | "active"

function App() {
    // Data
    let [tasks, setTasks] = useState<Array<Task>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ])
    let [filter, setFiler] = useState<FilterValuesType>("all")

    function removeTask(id: number) {
        let filteredTasks = tasks.filter((task) => task.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFiler(value)
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter((task) => task.isDone)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter((task) => !task.isDone)
    }

    // UI
    return (
        <div className="app">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    )
}

export default App
