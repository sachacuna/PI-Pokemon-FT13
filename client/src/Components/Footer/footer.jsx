import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import '../Footer/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id='footerCont'>
            <ul id='footerUl' >
                <li>
                <Link to="https://github.com/sachacuna">
                    <SiGithub />
                </Link>
                </li>
                <li>
                <Link to="https://www.linkedin.com/in/sacha-emmanuel-cuna">
                    <SiLinkedin />
                </Link>
                </li>
                <h4>Made by Sacha Cuña - Henry Project</h4>
            </ul>
        </div>
    )
}
export default Footer;