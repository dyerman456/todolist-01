import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({title, tasks}: Props) => {
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
                    </li>
                )
            })}
        </ul>

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title="+"/>
            </div>
            {tasksList}
            <div>
                <Button title="All"/>
                <Button title="Active"/>
                <Button title="Completed"/>
            </div>
        </div>
    )
}
