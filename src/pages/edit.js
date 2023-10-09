import React, { useEffect } from 'react'
import axios from 'axios'
import {Link , useNavigate , useParams} from 'react-router-dom'

export const EditBook = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [title ,setTitle] =React.useState('')
  const [author ,setAuthor] =React.useState('')
  const [publishYear ,setPublishYear] =React.useState('')
   
   useEffect(()=>{
      axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res)=>{
         setTitle(res.data[0].title)
         setAuthor(res.data[0].author)
         setPublishYear(res.data[0].publishYear)
      })
      .catch((err)=>{
        alert(err)
      })

   },[])


   function editData(){
    const data = {
      title, author ,publishYear 
    }
    axios
    .put(`http://localhost:5000/books/${id}`, data)
    .then(()=>{
      navigate('/')
    })
    
    .catch(()=>{
      alert("An error happened")
    })
   }

  return (
    <div className='border border-1 border-black p-5 w-60'>
    <Link to="/" className='text-black'> <i class="fa-solid fa-angle-left position-absolute border border-2 border-black ps-4 pe-4 pt-2 pb-2" id="left_btn" style={{ top:"10px",left:"10px",fontSize:"25px"}}></i></Link>
    <h4>Update Data</h4>
      <div className='d-flex flex-column align-items-center h-100 w-100'>

       <div className='w-100 d-flex flex-column'>
       <label>Title</label>
        <input name="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
       </div>
       <div className='w-100 d-flex flex-column'>
       <label>Author</label>
        <input name="author" value={author} onChange={(e)=> setAuthor(e.target.value)}/>
       </div>
       <div className='w-100 d-flex flex-column'>
       <label>Publish Year</label>
        <input name="publishYear" value={publishYear}  onChange={(e)=> setPublishYear(e.target.value)}/>
       </div>
       <button className='mt-4 btn btn-success' onClick={editData} >Submit</button>
      </div>
  </div>
  )
}
