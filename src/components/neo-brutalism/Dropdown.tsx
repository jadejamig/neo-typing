'use client'

import { ChevronDown } from 'lucide-react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dropdown({
  items,
  text,
}: {
  items: { name: string; link: string }[]
  text: string
}) {

  const [isActiveDropdown, setIsActiveDropdown] = useState(false)
  const navigate = useNavigate();

  return (
    <div
      data-state={isActiveDropdown ? 'open' : 'closed'}
      className="relative group w-full"
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onBlur={() => {
          setIsActiveDropdown(false)
        }}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown)
        }}
        className="flex w-full cursor-pointer items-center rounded-base border-2 border-black bg-main px-7 py-3 font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          {text}
          <ChevronDown
            className={
              'ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out'
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        className="absolute left-0 w-full group-data-[state=open]:top-[68px] group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-base border-2 border-black text-center font-base shadow-base transition-all"
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer block w-full border-b-2 border-black bg-main px-7 py-3 no-underline first:rounded-t-base last:rounded-b-base hover:bg-mainAccent"
              onClick={() => {
                navigate(item.link)
                setIsActiveDropdown(false)
              }}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}