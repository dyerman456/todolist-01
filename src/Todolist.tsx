import {FilterValuesType} from "./App.tsx";

type Props = {
    title: string
    tasks: Task[]
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({title, tasks, removeTask, changeFilter}: Props) => {
    // const title = props.title
    // const tasks = props.tasks

    // Деструктурирующее присваивание
    // const {title: title, tasks: tasks} = props
    // const {title, tasks} = props

    // const tasksList = tasks.map((task) => {
    //     return (
    //         <li>
    //             <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
    //         </li>
    //     )
    // })

    const tasksList = tasks.length === 0
        ? <span>No tasks</span>
        : <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                        <button onClick={() => {
                            removeTask(task.id)
                        }}>x
                        </button>
                    </li>
                )
            })}
        </ul>

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            <div>
                <button onClick={() => changeFilter("all")}>All</button>
                <button onClick={() => changeFilter("active")}>Active</button>
                <button onClick={() => changeFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}
