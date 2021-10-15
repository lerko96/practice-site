import React, { useState, useRef } from 'react';
import { FaCalculator, FaClipboardList, FaStickyNote, FaSearch } from 'react-icons/fa';

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
				<FaClipboardList
					className='tool-icon'
					onClick={() => {
						setTool(<TaskManager />);
						scrollToRef.current.scrollIntoView();
					}}
				/>

				<FaSearch
				className='tool-icon'
					onClick={() => {
						setTool(<Search />);
						scrollToRef.current.scrollIntoView();
					}}
				/>
				<FaCalculator
					className='tool-icon'
					onClick={() => setTool(<Calculator />)}
				/>

				<FaStickyNote
					className='tool-icon'
					onClick={() => setTool(<Notes />)}
				/>
			</div>
			<div className='tool-wrapper' ref={scrollToRef}>
				{tool}
			</div>
		</div>
	);
};

export default Toolbar;
