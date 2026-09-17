import projects from './data/projects.json'
import './App.css'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 15.5 15 5m0 0H6.5M15 5v8.5" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const [title, role] = project.title.split(' | ')
  const image = project.still || project.gif
  const technologies = project.technologies.map((technology) => technology.name || technology.skill)

  return (
    <article className={`project-card${index === 0 ? ' project-card--featured' : ''}`}>
      <div className="project-card__image">
        <img src={image} alt={`${title} project preview`} loading={index === 0 ? 'eager' : 'lazy'} />
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>0{index + 1} / 0{projects.length}</span>
          <span>{role || 'Featured project'}</span>
        </div>
        <h3>{title}</h3>
        <p className="project-card__description">{project.bulletPoints[0]}</p>
        <ul className="project-card__stack" aria-label={`${title} technologies`}>
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-card__links">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live project <ArrowIcon />
          </a>
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            Source code <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <main>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-heading__name">Ricardo Camacho Mireles</p>
                <h1 id="work-title">Projects I’ve built</h1>
              </div>
              <span className="section-heading__count">0{projects.length} projects</span>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>© {new Date().getFullYear()} Ricardo Camacho Mireles</span>
          <a href="/apps">Apps &amp; policies</a>
        </div>
      </footer>
    </>
  )
}

export default App
