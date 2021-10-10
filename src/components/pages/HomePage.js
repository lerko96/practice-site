import { useState, useEffect } from 'react';
import ProjectList from '../ProjectList';
import ToolsList from './ToolPage';

const HomePage = () => {
	const [name, setName] = useState('lerko');

	const handleClick = () => {
		setName('luigi');
	};

	const [projects, setProjects] = useState([
		{ title: 'To Do List', body: 'lorem ipsum...', date: '09/21', id: 1 },
		{
			title: 'Expense Manager',
			body: 'lorem ipsum...',
			date: '09/21',
			id: 2,
		},
	]);




	return (
		<div className='home'>
			<h1>welcome to the internet {name}</h1>
			<button onClick={handleClick}>Click me</button>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
				sed temporibus quo ex suscipit, quam tempora exercitationem ab
				deserunt id, ipsum ut, voluptatum similique voluptates dolore
				debitis fugit? Exercitationem, saepe.
			</p>
		</div>
	);
};

export default HomePage;
