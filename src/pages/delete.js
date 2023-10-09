import React from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'



export const Deletebook = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  function dataDelete(){
  
    axios
    .delete(`https://book-list-backend-y9vk.onrender.com/books/${id}`)
    .then(()=>{
      navigate('/')
    })
    
    .catch(()=>{
      alert("An error happened")
    })}

  return (
    <div className='d-flex flex-column align-items-center'>
       <Link to="/" className='text-black'> <i class="fa-solid fa-angle-left position-absolute border border-2 border-black ps-4 pe-4 pt-2 pb-2" id="left_btn" style={{ top:"10px",left:"10px",fontSize:"25px"}}></i></Link>

<p>Are you sure you want to delete ?</p>
          <button onClick={dataDelete}>Delete</button>

    </div>
  )
}

