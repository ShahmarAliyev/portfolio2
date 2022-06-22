import "./Contact.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="../assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="contacts">
          <div className="contactline">
            <EmailIcon />
            <span>
              <a href="https://mail.google.com/mail/u/0/?source=mailto&to=saliyev2019@gmail.com&fs=1&tf=cm">
                Send me an email
              </a>
            </span>
          </div>
          <div className="contactline">
            <LinkedInIcon />
            <span>
              <a href="https://www.linkedin.com/in/saliyev2019">
                Visit my LinkedIn profile
              </a>
            </span>
          </div>
          <div className="contactline">
            <CallIcon />
            <span>
              <a href="/">Call me at +12242564225</a>
            </span>
          </div>
          <div className="contactline">
            <GitHubIcon />
            <span>
              <a href="https://github.com/ShahmarAliyev">
                See all the source codes on Github
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
