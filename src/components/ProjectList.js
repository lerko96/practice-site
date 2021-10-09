const ProjectList = ({ projects, title }) => {
	

	
	return (
		<div className='project-list'>
			<h2>{ title }</h2>
			{projects.map((project) => (
				<div className='project-preview' key={project.id}>
					<h2>{project.title}</h2>
					<p>Date created {project.date}</p>
				</div>
			))}
		</div>
	);
};

export default ProjectList;
