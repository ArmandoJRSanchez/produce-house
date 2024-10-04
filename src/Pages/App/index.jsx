
import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShopingCartProvider } from '../../Context'

import Home from '../Home'
import Contacto from '../Contacto'
import Nosotros from '../Nosotros'
import Login from '../Login'
import Carrito from '../Carrito'
import Busqueda from '../Busqueda'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Layout from '../../Components/Layout'
import './App.css'
import CartDetail from '../../Components/CartDetail'
import Account from '../Account'
import Checkout from '../Checkout'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/tienda', element: <Home /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/carrito', element: <Carrito /> },
    { path: '/account', element: <Account /> },
    { path: '/busqueda', element: <Busqueda /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes;
}


function App() {

  return (
    <>
      <ShopingCartProvider>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
          <CartDetail />
          <Navbar />
          <Footer />
        </BrowserRouter>
      </ShopingCartProvider>

    </>
  )
}

export default App
