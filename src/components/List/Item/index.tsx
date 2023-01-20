import style from './Item.module.scss'
import { ITask } from '../../../types/task'

interface Props extends ITask{
    selectTask: (taskSelected: ITask) => void
}

export default function Item(
    {
        task,
        time,
        selected,
        completed,
        id,
        selectTask
    }: Props) {
    return (
        <li 
            className={`${style.item} ${selected ? style.itemSelected : ''}`} 
            onClick={() => selectTask({
                task,
                time,
                selected,
                completed,
                id
                }
            )}>
            <h3> {task} </h3>
            <span> {time} </span>
        </li>
    )
}