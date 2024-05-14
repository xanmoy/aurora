import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
      <nav className="flex items-center justify-between p-5 lg:px-96 text-xl text-gray-400">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"><Link href="/">Aurora AI</Link></h1>
          <p className="text-sm">developed by <Link href="https://twitter.com/xanmoy" className="text-blue-600">
              Team Xanmoy
          </Link>
              </p>


      </nav>
  )
}

export default Navbar
