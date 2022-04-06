import {React,useState ,useEffect} from 'react'
import {IoCodeSlash } from "react-icons/io5";
import { motion ,AnimatePresence } from "framer-motion"
import { BsKeyboardFill,BsPhone,BsServer,BsEyedropper } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import style from "./IconAnimation.module.scss"
function IconAnimation() {
    const iconArray = [<IoCodeSlash/>,<BsKeyboardFill/>, <BsPhone/>,<BsServer/>, <BsEyedropper/>,<MdComputer/>]
    const [renderedIcon,setRenderedIcon]=useState(<span><IoCodeSlash/></span>);
    const [randomX,setRandomX]=useState(Math.random()*(100 - 50) + 50);
    const [randomY,setRandomY]=useState(Math.random()*(100 - 50) + 50);

    const randomPosition = () => {
      return (Math.random(1000)*(100))
    }

    const renderIcon = () => { 
        const random =Math.floor(Math.random() * iconArray.length);
        const icon =<motion.div className={style.icon}  
        animate={{y:[`${randomPosition()}%`,`${randomPosition()}%`],x:[`${randomPosition()}%`,`${randomPosition()}%`],opacity:[0,1,0]}} transition={{ repeat:Infinity,duration: 3 }} > 
        {iconArray[random]} 
         </motion.div>;

        return icon;
    }
    useEffect(() => {
        const interval = setInterval(() => {
          setRenderedIcon(renderIcon)
        }, 3000);
          return () => clearInterval(interval);
    }, [])

  return (
    <div className={style.Container}>
     
     <motion.div  > 
          {renderIcon()}
      </motion.div>
        
     
  
    </div>
  )
}

export default IconAnimation