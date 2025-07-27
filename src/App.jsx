import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Body from './components/Body'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Nav/><Body/></>,
  },
  {
    path: "/about",
    element: <><Nav/><About/></>,
  },
  {
  path: "/contact",
  element: <><Nav/><Contact/></>,
  },
  {
    path: "/services",
    element: <><Nav/><Services/></>,
  },
],
{
  basename:"/HomeUi"
})
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider  router={router} />
 
    </>
  )
}
export default App
