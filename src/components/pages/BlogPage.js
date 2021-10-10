// import { Link } from 'react-router-dom';
import BlogList from '../blogs/BlogList';
import useFetch from '../useFetch';

const BlogPage = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs');

	return (
		<div className='blog-page'>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
            {/* <Link to='/blogs/create'>create</Link> */}
			{blogs && <BlogList blogs={blogs} title='blogs' />}

			{/* <BlogList
				blogs={blogs.filter((blog) => blog.author === 'lerko')}
				title="lerko's blogs"
				handleDelete={handleDelete}
			/> */}
		</div>
	);
};

export default BlogPage;
