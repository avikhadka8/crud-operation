import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Add from './pages/Add'
import Books from './pages/Books'
import Update from './pages/Update'

function App() {

  return (
   <>
    <Routes>
      <Route path='/books' element={<Books/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
   </>
  )
}

export default App
