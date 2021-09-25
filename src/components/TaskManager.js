import PropTypes from 'prop-types';
import Button from './Button';

const TaskManager = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }

	return (
		<div className='taskManager'>
			<h2>{title}</h2>
			<Button color='black' text='Add' onClick={onClick} />
		</div>
	);
};

TaskManager.defaultProps = {
	title: 'Task Manager',
};

TaskManager.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TaskManager;
