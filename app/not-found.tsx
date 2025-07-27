import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
<div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
    <div className="block md:max-w-lg">
        <Image src="/images/404.svg" alt="astronaut image" width={300} height={300}/>
    </div>
    <div className="text-center xl:max-w-4xl">
        <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">Page not found</h1>
        <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
        <button><a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
           
            Go back home
        </a>
        </button>

    </div>
</div>

    </div>
  )
}

export default page