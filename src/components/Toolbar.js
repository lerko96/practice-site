import React, { useState, useRef } from 'react';

import TaskManager from './tools/toDoList/TaskManager';
import Search from './Search';
import Calculator from './tools/calculator/Calculator';

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
				<button onClick={() => setTool(<Calculator />)}>Calc</button>
			</div>
			<div className='tool-wrapper' ref={scrollToRef}>
				{tool}
			</div>
		</div>
	);
};

export default Toolbar;
