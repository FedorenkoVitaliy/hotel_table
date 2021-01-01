import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "./elements/Select";
import Table from "./components/Table/Table";

const API = 'https://restcountries.eu/rest/v2'

const App = () => {
  const [allCountriesNames, setAllCountriesNames] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
  const [borders, setBorders] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const columns = ['Flag', 'Name', 'Capital', 'Population', 'Area', 'Currency'];

  const getCountries = async () => {
    const response = await axios.get(`${API}/all?limit=2/?fields=name;borders;`);
    setAllCountriesNames(response.data)
  }

  const getCountriesByCode = async (codes) => {
    const response = await axios.get(`${API}/alpha?codes=${codes.join(';')}`);
    setSelectedCountries(response.data)
  }

  const getSelectedBorders = () => {
    const selectedCountryObj = allCountriesNames.find(country => country.name === selectedCountry);
    setBorders(selectedCountryObj?.borders);
  }

  useEffect(() => {
    getCountries();
    getSelectedBorders();
  }, [])

  useEffect(() => {
    getSelectedBorders();
  }, [selectedCountry])

  useEffect(() => {
    if(borders?.length){
      getCountriesByCode(borders)
    }
  }, [borders])


  return (
    <div className="App">
      <Select
        options={allCountriesNames}
        style={{marginBottom: '20px'}}
        selected={selectedCountry}
        setSelected={setSelectedCountry}
      />
      <Table
        columns={columns}
        data={selectedCountries}
      />
    </div>
  );
}

export default App;
