import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchNote = ({ handleSearchNote }) => {
	return (
		<div className='search-note-wrapper'>
			<MdSearch className='search-icons' />
			<input
				onChange={(e) => handleSearchNote(e.target.value)}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default SearchNote;
