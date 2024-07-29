
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PetDetails from './components/PetDetails';
import { PetProvider } from './context/PetContext';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

const App = () => {
  return (
    <ErrorBoundary>
      <PetProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/pets/:id" element={<PetDetails />} />
          </Routes>
        </Router>
      </PetProvider>
    </ErrorBoundary>
  );
};

export default App;
