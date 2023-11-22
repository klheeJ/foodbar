import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { featuredProducts } from './lists';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState, RefObject } from "react";

const Products = () => {

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
                <div className='text-2xl'>Our Products</div>
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
                className='carousel w-3/4 gap-6 overflow-hidden cursor-grab'
                whileTap={{cursor:"grabbing"}}
                >
                <motion.div 
                    className='inner-carousel flex gap-6'
                    drag="x"
                    dragConstraints={{right:0, left:-width}}
                    >
                    {featuredProducts.map((product)=> {
                        return (
                        <motion.div className='relative min-w-[20%] rounded-lg border-2 border-solid border-white '>
                        <img className="pointer-events-none" src={product.image} alt="" />
                        <p className='text-white absolute top-2 left-2 bg-red-600 pl-2 pr-2 rounded-md'>Sale</p>
                        <div className='text-white'>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
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
  
export default Products
