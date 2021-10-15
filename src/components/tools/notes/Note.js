import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note-wrapper'>
			<span>{text}</span>
			<div className='note-footer'>
				<p>{date}</p>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};
export default Note;
