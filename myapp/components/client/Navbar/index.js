import Logo from '@/components/Logo/Logo'
import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'
import Link from 'next/link'

const Navbar = async () => {
    const user = await getServerUser()

  return (
    <header className='px-4 py-12 '>
        <nav className='flex justify-between max-w-screen-xl mx-auto'>
            <Logo />
            <Link href={'/post'}>Post</Link>
            <AuthLinks user={user} />
        </nav>
    </header>
  )
}

export default Navbar