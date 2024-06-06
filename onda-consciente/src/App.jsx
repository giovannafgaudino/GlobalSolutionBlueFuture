import Header from './componentes/Header/Header.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  
  const menuItems = [
    {text: 'Home', link: '/'},
    {text: 'Sobre', link: '/sobre'},
    {text: 'Login', link: '/login'},
    {text: 'Contato', link: '/contato'},
  ]

  return (
    <>
     <Header menuItems={menuItems}/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
