import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './NoteList';

const Notes = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '04/19/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '05/30/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '06/17/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '07/21/2021',
		},
	]);

	return (
		<div className='note-component'>
			<NotesList notes={notes} />
		</div>
	);
};

export default Notes;
