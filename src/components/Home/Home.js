import { useState } from 'react';

function Home() {
	// const name = 'Tyler';
	const [name, setName] = useState('lerko');


	const handleClick = () => {
		setName('luigi');
	};

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
}

export default Home;
