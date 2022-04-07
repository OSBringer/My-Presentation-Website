
import {React,useRef,useEffect} from 'react'
import style from "./Backdrop.module.scss"
import { motion,AnimatePresence  } from "framer-motion"
import {SiDiscord} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillMail } from "react-icons/ai";
function Backdrop({open,handleClose}) {
    const backdropRef = useRef(null);


    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (backdropRef.current && !backdropRef.current.contains(event.target)) {
            handleClose();
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [backdropRef,open]);

  return (
    <>

        { open ?

    <div 
    ref={backdropRef} 

    className={style.Backdrop } >
        <span><SiDiscord/> OSBrindžer#8570</span>
        <span><AiFillMail/>bhlavienka@gmail.com</span>
    </div>

    :  <>x</>
        }
    </>
  )
}

export default Backdrop