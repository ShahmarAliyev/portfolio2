import './Menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='https://drive.google.com/file/d/1ITiwoLV1DZmSdiy1scP39lqwMhG2akC4/view?usp=sharing'>
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
