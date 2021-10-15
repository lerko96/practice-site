import React, { useState } from 'react';
import TaskManager from './tools/toDoList/TaskManager';
import Search from './Search';

const Toolbar = () => {
	const [tool, setTool] = useState('');

	return (
		<>
			<div className='toolbar'>
				<button onClick={() => setTool(<TaskManager />)}>notes</button>
				<button onClick={() => setTool(<Search />)}>search</button>
			</div>
			<div className='tool-comp'>{tool}</div>
		</>
	);
};

export default Toolbar;
