import React from 'react'
import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon
} from '@heroicons/react/solid'
function Header () {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-2 md:px-10'>
      {/* Left - LOGO */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle - Search Bar */}
      <div className='flex items-center md:border-2 py-2 rounded-full'>
        <input
          type='text'
          className='text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none'
          placeholder='Start your search'
        />
        <SearchIcon className='hidden md:mx-2 md:inline-flex cursor-pointer h-10 bg-red-400 text-white rounded-full p-2' />
      </div>

      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className="hidden md:inline-block cursor-pointers">Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
      {/* Right  */}
    </header>
  )
}

export default Header
