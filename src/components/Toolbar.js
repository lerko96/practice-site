import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import TaskManager from './tools/toDoList/TaskManager';
import Search from './Search';

const Toolbar = () => {
	const [tool, setTool] = useState('');
	const scrollToRef = useRef();

	return (
		<div className='tool-container'>
			<div className='toolbar-wrapper'>
				<button
					onClick={() => {
						setTool(<TaskManager />);
						scrollToRef.current.scrollIntoView();
					}}
				>
					notes
				</button>

				<button
					onClick={() => {
						setTool(<Search />);
						scrollToRef.current.scrollIntoView();
					}}
				>
					search
				</button>
			</div>
			<div className='tool-wrapper' ref={scrollToRef}>
				{tool}
			</div>
		</div>
	);
};

export default Toolbar;
