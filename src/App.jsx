import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StateCitySelector from './domain/StateCitySelector/index'
import ToDoList from './domain/ToDoList/index'
import PostSelector from './domain/PostSelector/index'
import Error404 from './domain/ErrorPage/404Page'
import NavBar from './domain/Header/NavBar'
import Home from './domain/Home/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/variable.style.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        {/* Routes */}
        <Routes>
          <Route path="/todolist" element={<ToDoList/>} />
          <Route path="/statecityselector" element={<StateCitySelector/>} />
          <Route path="/postselector" element={<PostSelector/>} />
          <Route path='/' element={<Home/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
