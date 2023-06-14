import '../styles/components/projectsContainer.sass'




const links = [
  { title: 'Gerenciador de Projetos COST', ref: 'https://github.com/RickShimizu/Cost', id: 'cost', description: 'cost', name: 'cost' },
  { title: 'Consulta API PokeNext', ref: 'https://github.com/RickShimizu/PokeNext', id: 'pokenext', description: 'PokeNext', name: 'pokenext' },
  { title: 'FilmsLib', ref: 'https://github.com/RickShimizu/FilmsLib', id: 'filmlib', description: 'FilmLib', name: 'filmlib' },
  { title: 'TodoList', ref: 'https://github.com/RickShimizu/TodoList', id: 'todolist', description: 'TodoList', name: 'todolist' }
]



const ProjectsContainer = () => {
  return (
    <section className="technologies-container-project">
    <h2>Projetos</h2>
    <div className="technologies-grid-project">
      {links.map((link) => (
        <div className="technology-card-project" id={link.id} key={link.id}>
          <img src={`../../src/img/${link.name}.jpg`} alt="" />
          <div className="technology-info-project">
            <h3>{link.name}</h3>
            <a href={link.ref}>{link.title}</a>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default ProjectsContainer;
