import React from 'react'
import Logo from '/public/Logo.webp'
import Image from 'next/image'
import { NavbarArray, NavbarItemTypes } from '@/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import DropDown from '@/components/views/Navbar/subComponents/DropDown'



const Navbar = () => {
  return (
    <div className="py-10 flex space-x-7 justify-between items-center ">
      <div className="flex-shrink-0 w-36 bg-white border">
      <Image src={Logo} alt='Dine Market Logo'/> 
      </div>
      
      <ul className='flex space-x-12 text-lg font-normal border'>
        {NavbarArray.map((item, index:number)=>(
            <li className='relative flex items-center space-x-1 text-xl  cursor-pointer group'>
              <Link className='' href={item.href}>{item.label}</Link>
              {item.isDropDown?<IoIosArrowDropdown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"  />:""}
              {item.isDropDown && <div className={`invisible group-hover:visible absolute group-hover:duration-1000 left-0 top-8 bg-gray-300 rounded-sm px-6 py-2 font-light min-w-[7.8rem]`}>
                <DropDown item={item}/>
              </div>}
            </li>
            // 1.08
        ))}
        </ul>
        <div className="border flex items-center px-2 space-x-3 border-gray-300 cursor-pointer rounded-md text-slate-700">
          
        <BiSearch className="text-black"/>
          <input type='search' placeholder='What are you looking for?' className=' py-1 pl-1 pr-5 w-80 '/>
        </div>

        <div className="border flex-shrink-0 relative w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full flex items-center justify-center absolute top-1 right-2 bg-red-500 font-light text-xs text-white">0</div>
        <FiShoppingCart size={20}/>
        </div>
      </div>
  )
}

export default Navbar