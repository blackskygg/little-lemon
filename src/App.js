import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}> </Route>
        <Route path='/book' element={<Footer />}> </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
