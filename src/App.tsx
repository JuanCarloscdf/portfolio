import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { useMenuContenxt } from './hooks/useMenuContenxt'
import { useMsgPortal } from './hooks/useMsgPortal'
import Msg from './portals/Msg'
import NavbarMenu from './portals/NavbarMenu'
import PageProvider from './routes/PageProvider'




function App() {
  const {msgRef} = useMsgPortal()
  const {menuRef} = useMenuContenxt()
  return (
      <main className='text-black dark:text-white bg-strong dark:bg-strong-dark'>
        <Header />
        <PageProvider />
        <Footer/>
        <Msg ref={msgRef}/>
        <NavbarMenu ref={menuRef}/>
      </main>
  )
}

export default App
