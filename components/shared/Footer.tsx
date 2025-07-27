import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
<footer className="py-12 bg-gray-100 mt-4 border-b xl:py-24 dark:bg-gray-800">
    <div className="container px-4 mx-auto xl:px-0">
        <div className="grid gap-12 xl:grid-cols-6 xl:gap-24">
            <div className="col-span-2">
                <Link href="/" className="flex mr-4">
                    {/* <img src="/next.svg" className="h-8 mr-3" alt="Ticket Palace Logo"/> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500 dark:text-white">Ticket Palace</span>
                    </Link >
                <p className="max-w-lg mt-4 text-gray-500 dark:text-gray-400">
                    Welcome to Ticket Palace, a home of fun, laughter, luxury &amp; events.  We make it easy to discover events you’ll love — from local meetups to international festivals.
                    <br/>We are committed to powering your moments with unforgettable experiences.
                    </p>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">Resources</h3>
                <ul>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Ticket Palace   </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Figma   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Tailwind CSS   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Blog   </Link >
                    </li>
                    
                </ul>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">Help and support</h3>
                <ul>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">GitHub Repository   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Ticket Palace Library   </Link >
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">Follow us</h3>
                <ul>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Github   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Twitter   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Facebook   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">LinkedIn   </Link >
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-600 uppercase dark:text-white">Legal</h3>
                <ul>
                    <li className="mb-4">
                        <Link href="/privacy-policy/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Privacy Policy   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="/terms-and-conditions/" target="_blank" rel="noreferrer" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Terms &amp; Conditions   </Link >
                    </li>
                    <li className="mb-4">
                        <Link href="/license/" className="font-normal text-gray-600 hover:underline dark:text-gray-400">Licensing   </Link >
                    </li>
                </ul>
            </div>
        </div>
        <hr className="my-8 border-gray-200 lg:my-12 dark:border-gray-700"/>
        
        <span className="block text-center text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} <Link href="/" target="_blank" rel="noreferrer">Ticket Palace   </Link >. All Rights Reserved.
        </span>
    </div>
</footer>
    </>
  )
}

export default Footer