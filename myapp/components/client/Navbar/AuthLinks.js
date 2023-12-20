import React from 'react'
import { getServerSession } from "next-auth";
import { options } from '@/app/api/auth/[...nextauth]/options';
import Link from 'next/link';

const AuthLinks = ({user}) => {
  return (
    <div>
    {user ? (

      <div className="flex items-center gap-4">

       <Link href={'/admin/'}>Admin</Link>
        <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
       </div>
     ) : (
       <Link href="/api/auth/signin">Login</Link>
     )}
</div>
  )
}

export default AuthLinks