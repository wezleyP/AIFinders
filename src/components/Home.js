import {useState} from 'react'
import '../index.css';

//Cmpnts

import Header from './Header';

//Imgs
import { MdCancel } from 'react-icons/md';

//other
import data from '../data.json'
import {motion} from 'framer-motion'
import Button from './Button';


 function Home() {
   const [text, setText] = useState("");
   const [showDiv, setShowDiv] = useState(false);
   const [buttonText, setButtonText] = useState("");

   const updateName = (event) => {
      setText(event.target.value);
    };

    const pri = (newText) => {
      setText(newText);
    }



  return (
   <div className='background'>
      <Header />
      <div className='aboutParent'>
         <p className='aboutChild'>
         AI Finder is the place to find an array of new artificial intelligence websites to help in many different endeavors.
         </p>
         <p className='useCases'>
         Types of use cases available:
         </p>
      </div>
      <div className='aboutGrid'>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"email"} action={() => pri("email")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"writing"} action={() => pri("writing")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"images"} action={() => pri("image")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"website"} action={() => pri("website")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"video"} action={() => pri("video")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"animation"} action={() => pri("animation")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"search"} action={() => pri("search")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"business"} action={() => pri("business")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"speech"} action={() => pri("speech")}/>
            </div>
            <div className='aboutGridItem'>
               <Button className="buttonParent" name={"paraphrasing"} action={() => pri("paraphrasing")}/>
            </div>
         </div>
         
      <div className='searchBarParent'>
         <input className='searchBar' value={text} onChange={updateName} type="text" placeholder='search...'/>
         <MdCancel size={36} onClick={() => pri("")} />
      </div>
    
      <div className='grid'>
         {
          data.filter((val) => {
            if(text == "") {
               return val
            } else if (val.name.toLowerCase().includes(text.toLowerCase())) {
               return val
            } else if (val.use.toLowerCase().includes(text.toLowerCase())) {
               return val
            }}
            ).map( data => {
            return(        
               <motion.div whileHover={{ scale: 1.2 }} className='grid-item' key={data.id}>
                  <a target="_blank" href={data.url}>
                     <img className='itemImage' src={data.imageAdress} />
                  </a>
                  <div className='grid-item-description'>
                     {data.name}
                  </div>
                  <div className='grid-item-description'>
                     use case: {data.use}
                  </div>
                
               </motion.div>
             )
            })
         }
      </div>
   </div>
  )
}

export default Home