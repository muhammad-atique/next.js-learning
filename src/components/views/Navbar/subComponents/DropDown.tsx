import { NavbarItemTypes } from '@/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import React, { FC } from 'react'

const DropDown:FC<{item:NavbarItemTypes}> = ({item}) => {
  return (
    <ul>
      {
        item.dropDownData?.map((item:NavbarItemTypes,index:number)=>(
              <li className="hover:ml-2 group-hover:duration-300 -translate-y-4 group-hover:translate-y-0">
                <Link href={item.href}>{item.label}</Link>
              </li>
        ))
      }
    </ul>
  )
}

export default DropDown