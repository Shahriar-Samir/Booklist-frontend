import React from 'react'
import { Link } from 'react-router-dom'
export const CreateBook = () => {
  return (
    <div className='border border-1 border-black p-5 w-60'>
      <Link to="/" className='text-black'> <i class="fa-solid fa-angle-left position-absolute border border-2 border-black ps-4 pe-4 pt-2 pb-2" id="left_btn" style={{ top:"10px",left:"10px",fontSize:"25px"}}></i></Link>
      <h4>Create Book</h4>
        <form className='d-flex flex-column align-items-center h-100 w-100' method='POST' action='http://localhost:5000/books'>

         <div className='w-100 d-flex flex-column'>
         <label>Title</label>
          <input name="title"/>
         </div>
         <div className='w-100 d-flex flex-column'>
         <label>Author</label>
          <input name="author"/>
         </div>
         <div className='w-100 d-flex flex-column'>
         <label>Publish Year</label>
          <input name="publishYear"/>
         </div>
         <button className='mt-4 btn btn-success' >Submit</button>
        </form>
    </div>
  )
}
