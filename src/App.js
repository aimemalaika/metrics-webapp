import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Countries from './components/Countries';
import '@fontsource/lato';
import './App.css';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/countries" exact element={<Countries />} />
        <Route path="/details" exact element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
