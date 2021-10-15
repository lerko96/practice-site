import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='foot-links'>
				<Link to='/'>Home</Link>
				<Link to='/contact'>Contact</Link>
			</div>
			<p>Copyrite Lerko 2021</p>
		</div>
	);
};

export default Footer;
