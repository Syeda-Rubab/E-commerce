import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from 'react-icons/go';
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="border-b border-gray-300 py-6">
        <div className="container flex justify-between items-center">
          {/* Logo on the left */}
          <Image src="/Logoo.png" alt="logoo" width="50" height="50" className='absolute left-16 pt-5 '/>
          <div className="relative left-28 pl-2 top-3 font-bold text-3xl text-black text-montserat">
            Furniro
          </div>

          {/* Centered navigation links */}
          <div className="flex-1 flex justify-center gap-16 font-medium ">
            <Link
              className="relative top-3 hover:underline hover:decoration-gray-500 text-black sans"
              href="#"
            >
              Home
            </Link>
            <Link
              className="relative top-3 hover:underline hover:decoration-gray-500 text-black sans"
              href="#"
            >
              Shop
            </Link>
            <Link
              className="relative top-3 hover:underline hover:decoration-gray-500 text-black sans"
              href="#"
            >
              Blog
            </Link>
            <Link
              className="relative top-3 hover:underline hover:decoration-gray-500 text-black sans"
              href="#"
            >
              Contact
            </Link>
          </div>
          
          
          <span>
                <Image src="/Vector.png" alt="vector" width="22" height="22" className='relative right-40 top-3'/>
            </span>
            
            <div className="relative text-sm top-3 flex items-center right-24 gap-11">
            <div className="relative">
                
              <span>
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-black cursor-pointer" />
              </span>
            </div>
           

            {/* Heart icon */}
            <span className="text-black cursor-pointer">
              <GoHeart className="h-6 w-6" />
            </span>

            {/* Shopping cart icon */}
            <span className="text-gray-900 cursor-pointer">
              <IoCartOutline  className="h-8 w-8" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



