import { Route, Routes } from 'react-router-dom';
import './App.css';
import RootLayout from './Components/layout/RootLayout';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import Journal from './Components/pages/Journal';
import Shop from './Components/pages/Shop';
import Error from './Components/pages/Error';

function App() {
  
// sokol prokar routing korte hoy App.jsx e 

  return (
  <>
 <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
