import React from 'react'

export default function PostAddForm() {
  return (
    <form className='bottom-panel d-flex'>
        <input type="text" 
        placeholder='what are you thinking about?'
        className='form-control new-post-label my-2'/>
        <button type='button' className='btn btn-secondary px-3 m-2'>Add post</button>
    </form>
  )
}
