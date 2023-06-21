import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/book' element={<BookingPage />} />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
