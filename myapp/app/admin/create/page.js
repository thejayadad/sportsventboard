import React from 'react'
import { addPost } from '@/lib/actions'

const NewPost = () => {
  return (
    <section className='px-4 py-12'>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-8'>
        <h2 className='text-center'>New Post</h2>
        <form action={addPost} 
        className='flex flex-col'
        >
          <input type="text" placeholder="title" name="title" required />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
      <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="Football">Football</option>
          <option value="Soccer">Soccer</option>
          <option value="Basketball">Basketball</option>
          <option value="Baseball">Baseball</option>
          <option value="Volleyball">Volleyball</option>
        </select>
      <input type="text" placeholder="Image" name="imageUrl" required />
      <input type="text" placeholder="Draft" name="draft" required />

        <button
        type='submit'
        >Create</button>
        </form>
      </div>
    </section>
  )
}

export default NewPost