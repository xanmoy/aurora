import React from 'react'
import Link from "next/link";
const Navigator = () => {
    return (
        //   <header className="flex contain text-center justify-center items-center  text-gray-600 body-font">
        //       <div className="container mx-auto flex flex-wrap p-5 text-center flex-col md:flex-row items-center">

        //           <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-5 lg:gap-96 text-base justify-center text-center">
        //               <Link href="/chat" className="mr-5 text-xl font-bold text-transparent text-white">Chat</Link>
        //               <Link href="/search" className="mr-5 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 hover:text-blue-600">Search</Link>
        //           </nav>

        //       </div>
        //   </header>
        <nav className="flex justify-between p-5 lg:px-96 text-xl text-gray-400">
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"><Link href="/">Aurora AI</Link></h1>

            <nav className="md:ml-auto lg:pl-[700px] md:mr-auto flex flex-wrap gap-1 text-base items-end text-right justify-end">
                <Link href="/chat" className="mr-5 text-lg font-medium text-transparent text-white">Chat</Link>
                <Link href="/search" className="mr-5 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 hover:text-blue-600"><sup className='text-white font-thin'>web</sup>Search</Link>
            </nav>



        </nav>
    )
}

export default Navigator
