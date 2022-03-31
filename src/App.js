import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Information Of Countries</h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/:capital" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
