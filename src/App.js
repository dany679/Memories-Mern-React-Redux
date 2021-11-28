import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Memories from './components/Pages/Memories/Memories';
import Auth from './components/Pages/Auth/Auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom/';

function App() {
  return (
    <Router>
      <Container maxWidth='lg'>
        <Navbar />
        {/* //Router is the new Switch */}
        <Routes>
          <Route path='/' exact element={<Memories />} />
          <Route path='/auth' exact element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
