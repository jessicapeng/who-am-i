import './App.css';

const profileImage =
  'https://static.wixstatic.com/media/2296b6_34c632e1db4c433c8a77a2075cb92964~mv2.png/v1/crop/x_0,y_33,w_1182,h_1297/fill/w_900,h_990,al_c,q_90,enc_avif,quality_auto/profile%20professional.png';

const focusAreas = [
  { mark: '01', title: 'Generative AI', copy: 'RAG, agents, LLM applications, and evaluation.' },
  { mark: '02', title: 'Product Engineering', copy: 'Useful, scalable web applications and APIs.' },
  { mark: '03', title: 'Fintech', copy: 'AI-driven tools for finance and productivity.' },
  { mark: '04', title: 'Problem Solving', copy: 'Turning complicated systems into clear solutions.' },
];

const projects = [
  {
    number: '01',
    title: 'RESP First Responder App',
    href: 'https://github.com/msradam/resp-api',
    description: 'A humanitarian platform helping first responders reconnect disaster victims with their families.',
    tags: ['Full-stack', 'Humanitarian tech'],
  },
  {
    number: '02',
    title: 'Engineering 3D Phantom',
    description: 'A patient-specific model for validating robotic-guided prostate biopsy with AI segmentation.',
    tags: ['Medical AI', 'Robotics'],
  },
  {
    number: '03',
    title: 'Political Visual Literacy',
    description: 'Computer vision pipelines that identify extremist symbols using Faster R-CNN.',
    tags: ['Computer vision', 'TensorFlow'],
  },
  {
    number: '04',
    title: 'Space Jam',
    href: 'https://www.youtube.com/watch?v=z3NT4RAedZU',
    description: 'An interactive backboard shooter built with Arduino, IR beams, and custom fabrication.',
    tags: ['Hardware', 'Arduino'],
  },
];

const experience = [
  ['2022 — 2025', 'Goldman Sachs', 'Software Engineer · Investment Banking Engineering', 'Building AI products, RAG systems, and internal platforms for bankers.'],
  ['2020 — 2021', 'Goldman Sachs · Apple', 'Software Engineering Intern', 'Product engineering across finance and consumer technology.'],
  ['2018 — 2022', 'Columbia University', 'B.S. Computer Science · 3.9 GPA', 'AI, natural language processing, computer vision, and databases.'],
];

const skillGroups = [
  ['AI / ML', 'Python · PyTorch · TensorFlow · RAG · MCP · Computer Vision · NLP'],
  ['Engineering', 'TypeScript · React · FastAPI · AWS · Docker · Kubernetes · Kafka · SQL'],
  ['Design / Tools', 'Figma · HTML / CSS · Git · Excel · Photoshop · SolidWorks'],
];

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Jessica Peng, home">Jessica Peng <i>✦</i></a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI engineer · fintech</p>
        <h1>Building AI systems<br />that make a real impact.</h1>
        <p className="lede">AI Software Engineer at Goldman Sachs in Investment Banking Engineering.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">View my work <span>↓</span></a>
          <a className="text-link" href="mailto:jessica9peng@gmail.com">Get in touch <span>→</span></a>
        </div>
        <div className="socials" aria-label="Social links">
          <a href="https://github.com/jessicapeng" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/pengjessica" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:jessica9peng@gmail.com">Email</a>
        </div>
      </div>
      <figure className="portrait-wrap">
        <img src={profileImage} alt="Jessica Peng" />
        <figcaption>New York, NY <span>Available to connect</span></figcaption>
      </figure>
    </section>
  );
}

function Focus() {
  return (
    <section className="focus section-rule" id="about">
      <div className="section-heading"><p>What I work on</p><span>Selected capabilities, 2026</span></div>
      <div className="focus-grid">
        {focusAreas.map((item) => (
          <article key={item.title}>
            <span className="focus-number">{item.mark}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section-rule" id="work">
      <div className="section-heading"><p>Selected work</p><a href="https://github.com/jessicapeng" target="_blank" rel="noreferrer">View GitHub ↗</a></div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-top"><span>{project.number}</span><span>↗</span></div>
            <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.title}</a> : project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-rule" id="experience">
      <div className="section-heading"><p>Experience</p><a href="https://www.linkedin.com/in/pengjessica" target="_blank" rel="noreferrer">Full timeline ↗</a></div>
      <div className="timeline">
        {experience.map(([date, company, role, detail], index) => (
          <article key={company}>
            <time>{date}</time>
            <div className="timeline-dot" data-active={index === 0} />
            <div><h3>{company}</h3><p className="role">{role}</p><p>{detail}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section-rule">
      <div className="section-heading"><p>Tools I reach for</p><span>Depth over decoration</span></div>
      <div className="skill-grid">
        {skillGroups.map(([title, list]) => <div key={title}><h3>{title}</h3><p>{list}</p></div>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact">
      <div><p className="eyebrow">Have a thoughtful problem?</p><h2>Let’s build something useful.</h2></div>
      <a className="button button-dark" href="mailto:jessica9peng@gmail.com">Start a conversation <span>→</span></a>
      <div className="footer-bottom"><span>© 2026 Jessica Peng</span><span>AI Engineer · New York</span></div>
    </footer>
  );
}

export default function App() {
  return <div className="page"><Header /><main><Hero /><Focus /><Work /><Experience /><Skills /></main><Contact /></div>;
}
