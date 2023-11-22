import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faSearch, faHeart, faCartArrowDown, faUser  } from '@fortawesome/free-solid-svg-icons';
import { featuredProducts } from './lists';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState, RefObject } from "react";

const Feature = () => {

  const [width, setWidth] = useState(0);
  const carousel: RefObject<HTMLDivElement> = useRef(null);

  useEffect(()=>{
    if (carousel.current) {
  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
}
},[])


  return (
    <section className=' bg-[#131313] pt-10 pb-10'>
      <div>
        <div className='text-white flex flex-row justify-around pb-6'>
            <div>
                <div className='text-2xl'>Featured products</div>
                <p>------------------</p>
            </div>
            <div>
                <button className='text-red-500'><FontAwesomeIcon icon={faArrowLeftLong} /></button>
                <button className='text-red-500'><FontAwesomeIcon icon={faArrowRightLong} /></button>
            </div>
        </div>
        <div className='flex justify-center'>
          <motion.div 
            ref={carousel} 
            className='carousel overflow-hidden w-3/4 cursor-grab' 
            whileTap={{cursor:"grabbing"}}
            >
              <motion.div 
                          className='inner-carousel flex gap-10'
                          drag="x"
                          dragConstraints={{ right:0, left:-width }}
                          >
                  {featuredProducts.map((product)=> {
                      return (
                      <motion.div className='relative item rounded-lg border-b border-white-200/400 min-w-[20%]'>
                        <img className='w-full pointer-events-none' src={product.image} alt="" />
                        <p className='text-white absolute top-2 left-2 bg-red-600 pl-2 pr-2 rounded-md'>Sale</p>
                        <motion.div className='relative pt-3 pb-3 text-white'>
                          <div className='feature-boxes justify-center absolute feature gap-3 flex'>            
                            <a href=""><li className='w-[2em] h-[2em] flex justify-center bg-red-500 p-2 hover:bg-red-600 shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faSearch} /></li></a>
                            <a href=""><li className='w-[2em] h-[2em] flex justify-center bg-red-500 p-2 hover:bg-red-600 shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faHeart} /></li></a>
                            <a href=""><li className='w-[2em] h-[2em] flex justify-center bg-red-500 p-2 hover:bg-red-600 shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faCartArrowDown} /></li></a>
                            <a href=""><li className='w-[2em] h-[2em] flex justify-center bg-red-500 p-2 hover:bg-red-600 shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faUser} /></li></a>
                          </div>
                          <p>{product.name}</p>
                          <p>{product.price}</p>
                        </motion.div>
                      </motion.div>
                  );
                  })}
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Feature
