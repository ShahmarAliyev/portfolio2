import './Testimonials.scss';

export default function Testimonials() {
  const skills = [
    {
      id: 1,
      name: 'React JS',
      img: '../assets/react.jpg',
      skillsets: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Redux',
        'NodeJS',
        'Express',
        'MongoDB',
        'Postgres',
        'GIT',
        'Github',

        'Docker',
        'Grafana',
        'Prometheus',
        'Kubernetes',
        'CI/CD',
      ],
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Experience</h1>
      <div className='container'>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={skill.featured ? 'card featured' : 'card'}
          >
            <div className='top'>
              {' '}
              <h3>Skills</h3>
            </div>
            <div className='center'>
              <ul>
                {skill.skillsets.map((skillsetItem) => {
                  return <li key={skillsetItem}>{skillsetItem}</li>;
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
