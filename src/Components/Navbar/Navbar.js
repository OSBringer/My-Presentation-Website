import React from 'react'
import style from "./Navbar.module.scss"
import { AiFillGithub,AiFillLinkedin,AiFillMail } from "react-icons/ai";
function Navbar() {
  return (
    <div className={style.Container}>
      <a href='https://github.com/OSBringer'>
        <AiFillGithub />
      </a>
      <a href='https://www.linkedin.com/in/boris-hlavienka-567527163/'>
        <AiFillLinkedin/>
      </a>
      <a href='mailto: bhlavienka@gmail.com'>
        <AiFillMail/>
      </a>
    </div>
  )
}

export default Navbar