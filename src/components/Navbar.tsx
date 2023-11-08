import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faCartArrowDown, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Menus = ['Pizza', 'Burger'];

  const toggleOpen = () => {
    const prevValue = open;
    setOpen(!prevValue)
  }

  return (
    <section>
      <div className="bg-[#3E3D3D] flex flex-row items-center justify-evenly w-[100%] pt-3 pb-3 text-sm">
        <img src="./public/logo.png" alt="logo" />
        <ul className="text-white flex flex-row space-x-10 font-bold tracking-wider">
            <a href="" className='transition duration-300 ease-in-out hover:text-red-500'><li>Home</li></a>
            <div className='relative'>
              <a href="" onClick={(toggleOpen)} className='transition duration-300 ease-in-out hover:text-red-500'><li>About</li></a>
              {open && (<div className='absolute mt-1 bg-black'>
                  <ul>
                    {
                      Menus.map((menu)=>(
                        <li key={menu}>
                          {menu}
                        </li>
                    ))}
                  </ul>
                </div>)}
            </div>
            <div className='relative'>
              <a href="" className='transition duration-300 ease-in-out hover:text-red-500'><li>Page</li></a>
              <div className='toggle-menu absolute mt-1 bg-black'>
                    <ul>
                      {
                        Menus.map((menu)=>(
                          <li key={menu}>
                            {menu}
                          </li>
                      ))}
                    </ul>
              </div>
            </div>
            <a href="" className='transition duration-300 ease-in-out hover:text-red-500'><li>Shop</li></a>
            <a href="" className='transition duration-300 ease-in-out hover:text-red-500'><li>Blog</li></a>
            <a href="" className='transition duration-300 ease-in-out hover:text-red-500'><li>Contact</li></a>
        </ul>
        <ul className="text-white flex flex-row space-x-4">
            <a href=""><li className='border-solid bg-[#5b5858] p-2 pl-3 pr-3 hover:text-red-500 hover:shadow-white shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faSearch} /></li></a>
            <a href=""><li className='border-solid bg-[#5b5858] p-2 pl-3 pr-3 hover:text-red-500 hover:shadow-white shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faHeart} /></li></a>
            <a href=""><li className='border-solid bg-[#5b5858] p-2 pl-3 pr-3 hover:text-red-500 hover:shadow-white shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faCartArrowDown} /></li></a>
            <a href=""><li className='border-solid bg-[#5b5858] p-2 pl-3 pr-3 hover:text-red-500 hover:shadow-white shadow-md transition duration-300 ease-in-out'><FontAwesomeIcon icon={faUser} /></li></a>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
