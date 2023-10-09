import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export const ShowBook = () => {
  const [getDetails, setDetails] = React.useState([])
  const {id} = useParams()

     React.useEffect(()=>{
      
      axios
      .get(`https://book-list-backend-dadx.onrender.com/books/${id}`)
      .then((res)=>{
        setDetails(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })

     },[])
     const data = getDetails.map((item)=>{
         return <div className='d-flex flex-column align-items-start border border-3 border-success p-2 w-90 pb-5 pt-5 h-60'>
                   <p><span className='fw-bold text-success'>Id</span> : {item._id}</p>
                  <p><span className='fw-bold text-success'>Title</span> : {item.title}</p>
                  <p><span className='fw-bold text-success'>Author</span> : {item.author}</p>
                  <p><span className='fw-bold text-success'>Publish Year</span> : {item.publishYear}</p>
                  <p><span className='fw-bold text-success'>CreatedAt</span> : {new Date(item.createdAt).toString()}</p>
                  <p><span className='fw-bold text-success'>Last updated</span> : {new Date(item.updatedAt).toString()}</p>
                 
         
         </div>
                
})
   
      
    console.log(getDetails)

  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column'>
      <h3>Book Details</h3>
     <Link to="/" className='text-black'> <i class="fa-solid fa-angle-left position-absolute border border-2 border-black ps-4 pe-4 pt-2 pb-2" id="left_btn" style={{ top:"10px",left:"10px",fontSize:"25px"}}></i></Link>
{data}


    </div>
  )
}
