import './Task.css';
import PropTypes from 'prop-types';

const Task = ({ task, checkHandler, deleteHandler }) => {
  return (
    <li className="list">
      <div className={task.done ? 'checked' : 'unchecked'}>{task.text}</div>
      <div className="btns">
        <button className="checkBtn" onClick={() => checkHandler(task.id)}>
          {task.done ? 'Checked' : 'Check'}
        </button>
        <button className="deleteBtn" onClick={() => deleteHandler(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
};

export default Task;
