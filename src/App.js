import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Universities from './components/Universities';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="Countries/:country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
