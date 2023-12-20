import React from 'react'
import Link from 'next/link';
import { fetchPosts } from '@/lib/data';

const AllPost = async () => {
    const {  posts } = await fetchPosts();

  return (
    <section className='px-4 py-12'>
        <div className='flex flex-col max-w-screen-xl mx-auto'>
            <h2>Latest Post</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/post/${post._id}`}>
                    <span>{post.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AllPost