import './TaskList.css';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, checkHandler, deleteHandler }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
};

export default TaskList;
