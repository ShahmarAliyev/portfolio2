import './Navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import AttachFileIcon from '@mui/icons-material/AttachFile';
export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Portfolio
          </a>
          <div className='itemContainer'>
            <PersonIcon className='icon' />
            <span>+12242564225</span>
          </div>
          <div className='itemContainer'>
            <MailIcon className='icon' />
            <span>
              <a href='https://mail.google.com/mail/u/0/?source=mailto&to=shahmar.aliyevv@gmail.com&fs=1&tf=cm'>
                shahmar.aliyevv@gmail.com
              </a>
            </span>
          </div>
          <div className='itemContainer'>
            <AttachFileIcon className='icon' />
            <span>
              <a href='https://drive.google.com/file/d/1a59Xx6WChwU1b8NMM077AfEjEyelj2ax/view?usp=drive_link'>
                See Resume
              </a>
            </span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
