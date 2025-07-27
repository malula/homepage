import Link from 'next/link';
import React from 'react';
import NavItems from './NavItems';

const Header = () => {
  return (
   <header className='sticky z-50 top-0 flex flex-row items-start justify-between border-b border-gray-200 bg-white shadow-sm'>
<Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
     <h1 className="text-2xl font-bold text-blue-600 p-4">Ticket Palace</h1>

</Link>


<div className='flex  p-4 w-auto'>
    <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300 ">
      <Link href="/sign-in" >Sign In</Link>
    </button>
    {/* <NavItems /> */}
</div>
   </header>
  );
};

export default Header;
