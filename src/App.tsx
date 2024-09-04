import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import FormularioCategoria from './components/categoria/formulariocategoria/FormularioCategoria'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/cadastroCategoria' element={<FormularioCategoria />} />
            <Route path='/editarCategoria/:id' element={<FormularioCategoria/>}/>
            <Route path='/deletarCategoria/:id' element={<DeletarCategoria/>}/>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
