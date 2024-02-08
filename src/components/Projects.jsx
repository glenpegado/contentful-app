import { useFetchProjects } from '../API/fetchAPI';

function Projects() {
  const { loading, projects } = useFetchProjects();

  if (loading) return <section className='projects'>Loading...</section>;
  return (
    <section className='projects'>
      {/* TITLE */}
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      {/* PROJECTS */}
      <div className='projects-center'>
        {projects.map((el) => {
          const { id, url, img, title } = el;
          return (
            <a
              href={url}
              key={id}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
