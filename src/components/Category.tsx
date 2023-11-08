import { CategoryItems } from "./lists";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";

const Category = () => {

    const [width, setWidth] = useState(0);
    const carousel: RefObject<HTMLDivElement> = useRef(null);
  
    useEffect(()=>{
        if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
    },[])

  return (
      <section className=' bg-[#3E3D3D] pt-10 pb-10'>
        <div>
            <div className='text-white flex flex-row justify-around pb-6'>
                <div>
                    <h2>Shop By Category</h2>
                    <p>------------------</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <motion.div 
                    ref={carousel}
                    className='carousel w-3/4 gap-6 overflow-hidden cursor-grab'
                    whileTap={{cursor:"grabbing"}}
                    >
                    <motion.div 
                        className='inner-carousel flex gap-6'
                        drag='x'
                        dragConstraints={{right:0, left:-width}}
                        >
                        {CategoryItems.map((item)=> {
                            return (
                            <motion.div className='min-w-[20%] rounded-lg border-2 border-solid border-white '>
                            <img className="pointer-events-none" src={item.image} alt="" />
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

export default Category
