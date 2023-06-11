import './Menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='https://drive.google.com/file/d/1a59Xx6WChwU1b8NMM077AfEjEyelj2ax/view?usp=drive_link'>
            Resume
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#testimonials'>Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#contact'>Contact</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href='#works'>Certificates</a>
        </li> */}
      </ul>
    </div>
  );
}
