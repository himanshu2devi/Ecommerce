import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductScreen from './Screens/ProductScreen';

import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
          <Route path='/' element={< HomeScreen /> } exact />
          <Route path='/product/:id' element={< ProductScreen /> }  />
          <Route path='/cart/:id' element={<CartScreen />} /> //? is used to make id optional.we do not always use
    <Route path='/cart' element={<CartScreen />} /> 
        </Routes>
        </Container>
        </main>
       <Footer />
      
     
       </Router>
  );
}

export default App;
