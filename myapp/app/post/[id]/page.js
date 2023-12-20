import { fetchPost } from '@/lib/data';
import React from 'react'
// import { addComment } from '@/lib/actions';

const SinglePost = async ({params}) => {
    const { id } = params;
    const post = await fetchPost(id)

  return (
    <section className='px-4 py-12'>
        <div className='flex flex-col mx-auto max-w-screen-xl gap-8'>
        <h2 className='text-center'>SinglePost</h2>
        <span>{post.category}</span>
        <h1>{post.title}</h1>
        {/* <span>{post.category}</span>
        // <h1>{post.title}</h1>
        <h1>Comment Below</h1>
        <form action={addComment}>
            <input type="text" placeholder="title" name="text" required />
            <input type="text" value={post.id} name="postId" hidden />
            <button type="submit">Submit</button>
        </form>
        <h3 className='text-center'>Latest Comments</h3> */}
        </div>
    </section>

  )
}

export default SinglePost