import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { DynamicRoot } from './routes/DynamicRoot'
import { Web3AuthRoot } from './routes/Web3AuthRoot'
import { ParticleRoot } from './routes/ParticleRoot'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dynamic',
        element: <DynamicRoot />,
      },
      {
        path: '/web3Auth',
        element: <Web3AuthRoot />,
      },
      {
        path: '/particle',
        element: <ParticleRoot />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
