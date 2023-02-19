import React from 'react'
import {motion} from 'framer-motion'
import AIFinder from '../images/AIFinder.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
     <nav className='navWeb'>
       <ul className='headerUlLeft'>
         <li className='webli'>
            <Link to = '/'>
               <motion.h2
               whileHover={{scale:1.1}}
               >
                  AI Finders
               </motion.h2>
            </Link>
         </li>
       </ul>
       <ul className='headerUlRight'> 
         <Link to = '/contact'>
            <motion.li
            whileHover={{scale:1.3}}
            className='webli'>
               contact
            </motion.li> 
         </Link>
       </ul>
     </nav>
     
   </>
   )
 }

export default Header