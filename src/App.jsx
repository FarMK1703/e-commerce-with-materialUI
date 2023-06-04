import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Catalog from './pages/Catalog'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ProductFullInfo from './pages/ProductFullInfo'

function App() {
  


  return (
    <div className='App'>
     
     
      <Header/>
    <SideBar/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='product-full-info/:id' element={<ProductFullInfo/>}/>
      </Routes>
     </BrowserRouter>
     
     
    </div>
  )
}

export default App
