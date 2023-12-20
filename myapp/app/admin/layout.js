import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Link href={'/admin/create'}>NewPost</Link>
        {children}
    </div>
  )
}

export default layout