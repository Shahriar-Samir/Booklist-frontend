import React from "react";
import axios from 'axios'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'


export default function Home(){
    const [getApi , setApi] = React.useState([])
       
      React.useEffect(()=>{
          
          axios
          .get('https://book-list-backend-dadx.onrender.com/books')
          .then((res)=>{
            setApi(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })

      },[])
       
     



      const dataSet = getApi.map((item,index)=>{
        return <tr className="">
           <td>{index+1}</td>
           <td>{item.title}</td>
           <td>{item.author}</td>
           <td>{item.publishYear}</td>
           <td> 
                 <div className="w-100 d-flex justify-content-around">


          <Link to={`/books/details/${item._id}`}>
<BsInfoCircleFill className="text-success" style={{cursor:'pointer'}}/>
</Link>

<Link to={`/books/edit/${item._id}`}>
<AiOutlineEdit className="text-warning" style={{cursor:'pointer'}} />
</Link>
<Link to={`/books/del/${item._id}`}>
<AiFillDelete className="text-danger" style={{cursor:'pointer'}}/>
</Link>
           


                 </div>
            
             </td>
  
        </tr>
      })
  
  
    return(
     <div className="d-flex justify-content-center align-items-center flex-column homepage ">
        
          <div className="header d-flex align-items-center w-100 justify-content-between mb-3">
          <h2 className="m" >Book lists</h2>
           <Link to="/books/create">    <i class="fa-solid fa-plus border border-2 border-success fs-4 ps-1 pe-1 text-success "></i></Link>
          </div>

       <div className="tablebox w-100">
       <table className="text-center w-100">
            <tr>
                <th style={{width:'30px'}}>No</th>
                <th style={{width:'100px'}}>Title</th>
                <th style={{width:'150px'}}>Author</th>
                <th style={{width:'90px'}}>Publish Year</th>
                <th style={{width:'50px'}}>Operations</th>
            </tr>
            {dataSet}
          </table>
        
       </div>
     </div>
   
    )
}
