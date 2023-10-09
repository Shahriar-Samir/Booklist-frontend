import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'

// imports
import Home from './pages/home'
import { CreateBook } from './pages/create'
import { EditBook } from './pages/edit'
import { ShowBook } from './pages/details'
import {Deletebook} from './pages/delete'
//header and footer



export default function App(){
    return(
        <main className="text-black d-flex align-items-center justify-content-center bg-white w-90 s_mw-700 h-75 position-relative">
            
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/books/create" element={<CreateBook/>}/>
            <Route path="/books/details/:id" element={<ShowBook/>}/>
            <Route path="/books/edit/:id" element={<EditBook/>}/>
            <Route path="/books/del/:id" element={<Deletebook/>}/>
           </Routes>
           </BrowserRouter>
        </main>   
)
}
