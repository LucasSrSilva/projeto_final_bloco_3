import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Navbar/>
      <div className='min-h-[80vh]'>
      <Home/>
      </div>
      <Footer/>
    </>
  )
}

export default App
