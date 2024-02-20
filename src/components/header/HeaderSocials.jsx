import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/tamojit-das-b77b62293" target="_blank"><BsLinkedin /></a> {/*to open it on new tab*/}
            <a href="https://github.com/Tamoziit" target="_blank"><FaGithub /></a>
            <a href="https://leetcode.com/Tamojit_Das/" target="_blank"><SiLeetcode /></a>
        </div>
    )
}

export default HeaderSocials