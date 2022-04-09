import {React,useEffect,useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import style from "./Home.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion";
import {Carousel} from "react-responsive-carousel";

import {SiJavascript ,SiReact,SiRedux ,SiHtml5,SiMaterialui} from "react-icons/si";
import {IoLogoSass, IoIosArrowUp} from "react-icons/io";
import { FiArrowUp } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import Navbar from '../Components/Navbar/Navbar'
import Backdrop from '../Components/Backdrop/Backdrop'
import { Link,animateScroll as scroll } from "react-scroll";
import Scrollspy from 'react-scrollspy'
import IconAnimation from '../Components/IconAnimation'
function Home() {
    const [openBackdrop,setOpenBackdrop]=useState(false)
    useEffect(() => {
      Aos.init()
    }, [])

    const handleClose = () => {
        console.log('hehe')
        setOpenBackdrop(!openBackdrop)
        
    }

  return (
    <div className={style.homeContainer} >
    <button onClick={()=>scroll.scrollToTop()}> <FiArrowUp style={{width:"min-content"}}/></button>
   
    <Scrollspy className={style.scrollSpy} currentClassName={style.X}items={ ['firstSection', 'secondSection', 'thirdSection','fourthSection'] } >
        <li>  <Link 
                to="firstSection"
                smooth={true}>
                    <BsDot/>
                </Link>
        </li>
        <li>  <Link 
                to="secondSection"
                smooth={true}>
                    <BsDot/>
                </Link>
        </li>
        <li>  <Link 
                to="thirdSection"
                smooth={true}>
                    <BsDot/>
                </Link>
        </li>
        <li>  <Link 
                to="fourthSection"
                smooth={true}>
                    <BsDot/>
                </Link>
        </li>
    </Scrollspy>
       {/* <IconAnimation/>  */}
        <div className={style.firstSection}  id="firstSection">
        <Backdrop open={openBackdrop} handleClose={handleClose} />
            <Link 
                activeClass="active"
                to="secondSection"
                smooth={true}
                duration={500}>
                <motion.h1  whileInView={{ scale: [1,1.2] }} animate={{y:[0,-50,0]}} transition={{ duration: 2 }} >Hi i am <b>Boris</b></motion.h1>
                <motion.h3 
                    animate={{opacity:[0,1]}}
                    transition={{ duration: 4 }}
                >A front-end developer</motion.h3>
            </Link>
            <Navbar/>
        </div>
        <div  className={style.secondSection}   >
            <Link 
                id="secondSection"
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
                    <SiReact style={{color:"#61dafb"}}/> ReactJS
            </li>
            <li data-aos="fade-left"
                data-aos-easing="ease-in-sine">
                    <SiJavascript style={{color:"#F0DB4F"}}/> JavaScript
            </li>
            <li data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                    <SiHtml5 style={{color:"#e34c26"}}/> HTML5
            </li>
            <li data-aos="fade-left"
                data-aos-easing="ease-in-sine">
                    <IoLogoSass style={{color:"#cd669a"}}/> SASS
            </li>
            <li data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                    <SiRedux style={{color:"#764abc"}}/> Redux
            </li>
            <li data-aos="fade-left"
                data-aos-easing="ease-in-sine">
                    <SiMaterialui style={{color:"#007fff"}}/> Material UI
            </li>
        </div>
        <div className={style.thirdSection}>
            <Link 
                id="thirdSection"
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
                I started with &nbsp; <b style={{color:style.blue}}>ReactJS  &nbsp; <SiReact/> </b>  &nbsp; about a year ago
            </li>

            <li
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
            className={style.about}>
                I love learning and studying about new technologies
            </li>

            <li
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
            className={style.about}>
                If you want to get more personal  &nbsp;<b style={{cursor:"pointer",color:style.blue}} onClick={()=> setOpenBackdrop(true)}>Click me</b>  
            </li>

        </div>
        <div className={style.fourthSection} >
                <Link 
                    id="fourthSection"
                    activeClass="active" 
                    to="firstSection" 
                    spy={true} 
                    smooth={true} 
                duration={500}>
                <motion.h1 whileInView={{opacity:[0,1]}} transition={{ duration: 2 }}>My work</motion.h1>
                </Link>
                <ul className={style.wrapper}>
                <li className={style.page} >
                <h3> <i>Gyme</i></h3> - Gym eCommerce website
                <span style={{width:"80vw",minHeight:0,margin:"0 auto"}}>
                <Carousel  showStatus={false} infiniteLoop={true} className={style.Carousel}>
                    <div className={style.carouselImage} >
                        <img  src={require("../assets/images/gyme0.png")} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div className={style.carouselImage} >
                        <img src={require("../assets/images/gyme1.png")}/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className={style.carouselImage} >
                        <img src={require("../assets/images/gyme2.png")} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div className={style.carouselImage} >
                        <img src={require("../assets/images/gyme3.png")} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div className={style.carouselImage} >
                        <img   src={require("../assets/images/gyme5.png")} />
                        <p className="legend">Legend 3</p>
                    </div>
                    
                </Carousel>
            </span>  
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Home