import {React,useEffect} from 'react'
import style from "./Home.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { AiFillGithub,AiFillLinkedin,AiFillMail } from "react-icons/ai";
import {SiJavascript ,SiReact,SiRedux ,SiHtml5,SiMaterialui} from "react-icons/si";
import {IoLogoSass } from "react-icons/io";

import { Link, Element,animateScroll as scroll } from "react-scroll";

import IconAnimation from '../Components/IconAnimation'
function Home() {

    useEffect(() => {
      Aos.init()
    }, [])
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

  return (
    <div className={style.homeContainer} id="firstSection">
      <IconAnimation/>
        <div className={style.firstSection} >
      
            <Link 
                activeClass="active" 
                to="secondSection" 
                spy={true} 
                smooth={true} 
                duration={500}>
              
                <motion.h1  whileInView={{ scale: [1,1.2] }} animate={{y:[0,-50,0]}} transition={{ duration: 2 }} >Hi i am Boris</motion.h1>
                <motion.h3 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 4 }}
                >A front-end developer</motion.h3>
            </Link>
        </div>
        <div  className={style.secondSection} id="secondSection">
            <Link 
                activeClass="active" 
                to="thirdSection" 
                spy={true} 
                smooth={true} 
                duration={500}>
                <motion.h1 whileInView={{opacity:[0,1]}} transition={{ duration: 2 }}>What i work with</motion.h1>
            </Link>
            <li 
                data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                    <SiReact/> ReactJS
            </li>
            <li data-aos="fade-left"
                data-aos-easing="ease-in-sine">
                    <SiJavascript/> JavaScript
            </li>
            <li data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                    <SiHtml5/> HTML5
            </li>
            <li data-aos="fade-left"
                data-aos-easing="ease-in-sine">
                    <IoLogoSass/> SASS
            </li>
            <li data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                    <SiRedux/> Redux
            </li>
            <li data-aos="fade-left"
                data-aos-easing="ease-in-sine">
                    <SiMaterialui/> Material UI
            </li>
        </div>
        <div className={style.thirdSection} id="thirdSection">
            <Link 
                activeClass="active" 
                to="fourthSection" 
                spy={true} 
                smooth={true} 
                duration={500}>
            <motion.h1 whileInView={{opacity:[0,1]}} transition={{ duration: 2 }}>About me</motion.h1>
            </Link>

            <li
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
            className={style.about}>
                I am currently a student at <b style={{color:'red'}}>&nbsp; VUT</b><b> &nbsp;FIT</b> 
                <img src={require("../assets/images/fit.png")}/>
            </li>

            <li
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
            className={style.about}>
                I focus on web design and development
            </li>

            <li
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
            className={style.about}>
                I love learning about new technologies and practices
            </li>

            <li
                
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
            className={style.about}>
                I started with &nbsp; <b style={{color:style.blue}}>ReactJS  &nbsp; <SiReact/> </b>  &nbsp; about a year ago
            </li>


        </div>
        <div className={style.fourthSection} id="fourthSection">
           
                <Link 
                    activeClass="active" 
                    to="firstSection" 
                    spy={true} 
                    smooth={true} 
                duration={500}>
                <h1>4</h1>
                </Link>
        </div>
    </div>
  )
}

export default Home