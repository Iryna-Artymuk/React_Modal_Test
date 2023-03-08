// import { AiOutlineClose } from 'react-icons/ai';
import IconButton from '../../IconButton/IconButton';
import { ReactComponent as Delete } from '../../../icons/delete.svg';
const Todo = ({ completed, toggleComplete, name, deleteToDo }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: 200,
      }}
    >
      <label>
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={toggleComplete}
        />
        <p>{name} </p>
      </label>
      <IconButton onClick={deleteToDo} type="todoItem">
        <Delete width="2em" height="2em" aria-label="delete todo item" />
      </IconButton>
    </div>
  );
};
export default Todo;
//     <Delete width="2em" height="2em" fill="purple" />
// інлайн стилі записуються в  інлайн стилі svg яка була імпортована як реакт компонент
