import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Client from './components/pages/Client'
import Reservas from './components/pages/Reservas'
import CustomerRegistration from './components/pages/CustomerRegistration'
import NewReserva from './components/pages/NewReserva'
import Funcionario from './components/pages/Funcionario'
import  RentCar from './components/pages/RentCar'
import  Devolucao from './components/pages/Devolucao'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/client" element={<Client/>}/>
          <Route path="/reservas" element={<Reservas/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/customerregistration" element={<CustomerRegistration/>}/>
          <Route path="/newreserva" element={<NewReserva/>}/>
          <Route path="/funcionario" element={<Funcionario/>}/>
          <Route path="/rentcar" element={<RentCar/>}/>
          <Route  path="/devolucao" element={<Devolucao/>}/>
       </Routes>
      </Container>
      <Footer />
    </Router>
   
  );
}

export default App;
