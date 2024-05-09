import { Fragment } from 'react';
import './App.css';
import Header from './Componentes/Hearder/Header';
import Nav from './Componentes/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Careers from './Pages/Careers';
import Specialties from './Pages/Specialties';
import PrivateBrand from './Pages/PrivateBrand';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Footer from './Componentes/Footer/Footer';
import OurPartners from './Pages/OurPartners';



function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <Routes>
        <Route path='Home' element={<Home/>} />
        <Route path='AboutUs' element={<AboutUs/>} />
        <Route path='our-partners' element={<OurPartners/>} />
        <Route path='Specialties' element={<Specialties />} />
        <Route path='PrivateBrand' element={<PrivateBrand />} />
        <Route path='ContactUs' element={<ContactUs />} />
        <Route path='Careers' element={<Careers />} />
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
