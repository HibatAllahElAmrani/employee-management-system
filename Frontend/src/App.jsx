
import './App.css'
import EmployeesList from './components/EmployeesList'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
 
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* {// http://localhost:3000} */}
          <Route 
            path='/' 
            element={ <EmployeesList/> }
          >
          </Route> 

          {/* {// http://localhost:3000/employees} */}
          <Route 
            path='/employees' 
            element={<EmployeesList />}
          >
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
