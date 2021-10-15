import { useState } from 'react';

const Search = () => {
	const [gSearch, setGSearch] = useState('');

	// const handleSubmit = (e) => {};
	const handleSearch = () => {
		window.open('http://google.com/search?q=' + gSearch);
	};

	return (
		<div className='search-wrapper'>
			<div className='search-bar'>
				<form>
					<button id='search' onClick={handleSearch}>
						<i class='fas fa-otter'></i>
					</button>
					<input
						type='text'
						autoFocus
						required
						placeholder='search the internet'
						value={gSearch}
						onChange={(e) => setGSearch(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
};

export default Search;
