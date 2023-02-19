import React from 'react'

export default function UnfilteredGrid() {
  return (
   <div className='grid'>
   {
    data.map( data => {
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
            <motion.div>

            </motion.div>
         </motion.div>
       )
      })
   }
</div>
  )
}
