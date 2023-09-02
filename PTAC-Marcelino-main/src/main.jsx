import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home/home.jsx'
import Todo from './todo/todo.jsx'
  import {Routes,Route,BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/todo' element={<Todo />}></Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
