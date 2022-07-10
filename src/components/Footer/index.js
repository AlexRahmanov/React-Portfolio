import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <ul className="icons" style={{display: "flex", justifyContent: "center", background: "#4d7c88", color: "rgba(0, 0, 0, 0.5"}}>
        <li>
          <a
            href="https://www.linkedin.com/in/alexander-ram/"
            target="_blank"
            rel="noreferrer"
          >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </li>
        <li style={{marginLeft: "15px"}}>
          <a
            href="https://github.com/AlexRahmanov"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
        <li style={{marginLeft: "15px"}}>
          <a
            href="mailto:alexr722@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </li>
        
      </ul>
    </footer>
  );
}

export default Footer;
