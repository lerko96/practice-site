import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './NoteList';
import SearchNote from './SearchNote';

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

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('lerko96-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('lerko96-notes-app-data', JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	return (
		<div className='note-component'>
			<SearchNote handleSearchNote={setSearchText} />
			<NotesList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText)
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
		</div>
	);
};

export default Notes;
