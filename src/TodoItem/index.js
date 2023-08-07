import { CompleteIcon } from '../TodoIcon/CompeteIcon';
import { DeletIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

function TodoItem(props) {
    return (
      <li>
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />

        <p className={`${props.completed && "text-check--active"}`}>{props.text}</p>

        <DeletIcon
          onDelete={props.onDelete}
        />
      </li>
    );
  }

  export {TodoItem}