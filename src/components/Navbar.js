import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to='/'>Home</Link>
			<Link to='/blogs'>Blog</Link>
			<Link to='/blogs/create'>Create</Link>
			<Link to='/games'>Games</Link>
			<Link to='/tools'>Tools</Link>
			<Link to='/contact'>Contact</Link>
		</nav>
	);
};

export default Navbar;
