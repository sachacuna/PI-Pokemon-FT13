import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import '../Footer/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id='footerCont'>
            <ul id='footerUl' >
                <li>
                <a href={"https://github.com/sachacuna"}>
                    <SiGithub id='logoGit'/>
                </a>
                </li>
                <li>
                <a href={"https://www.linkedin.com/in/sacha-emmanuel-cuna"}>
                    <SiLinkedin id='logoLin' />
                </a>
                </li>
                <h4>Made by Sacha Cuña - Henry Project</h4>
            </ul>
        </div>
    )
}
export default Footer;