import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Posts, Users } from './pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />
  },
  {
    path: '/posts/:userId',
    element: <Posts />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
