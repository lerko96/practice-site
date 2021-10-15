import React, { useState, useRef } from 'react';

import TaskManager from './tools/task/TaskManager';
import Search from './Search';
import Calculator from './tools/calculator/Calculator';
import Notes from './tools/notes/Notes';

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
					Task
				</button>

				<button
					onClick={() => {
						setTool(<Search />);
						scrollToRef.current.scrollIntoView();
					}}
				>
					Search
				</button>
				<button onClick={() => setTool(<Calculator />)}>
					Calculator
				</button>
				<button onClick={() => setTool(<Notes />)}>
					Notes
				</button>
			</div>
			<div className='tool-wrapper' ref={scrollToRef}>
				{tool}
			</div>
		</div>
	);
};

export default Toolbar;
