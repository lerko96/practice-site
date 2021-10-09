import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import Button from '../../Button';

const TaskHeader = ({ title, onAdd, showAdd }) => {
	//   const location = useLocation()

	return (
		<header className='TaskHeader'>
			<h1>{title}</h1>

			<Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Close' : 'Add'}
				onClick={onAdd}
			/>
		</header>
	);
};

TaskHeader.defaultProps = {
	title: 'Task Tracker',
};

TaskHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default TaskHeader;
