import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date }) => {
	return (
		<div className='note-wrapper'>
			<span>{text}</span>
			<div className='note-footer'>
				<p>{date}</p>
				<MdDeleteForever className='delete-icon' size='1.3em' />
			</div>
		</div>
	);
};
export default Note;
