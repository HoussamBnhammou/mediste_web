// components/SearchBar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for making HTTP requests

const SearchBar = () => {
  const [doctorTypes, setDoctorTypes] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch doctor types from backend
    axios.get('/api/doctorTypes') // Adjust the URL as needed
      .then(response => setDoctorTypes(response.data))
      .catch(error => console.error('Error fetching doctor types:', error));

    // Fetch cities from backend
    axios.get('/api/cities') // Adjust the URL as needed
      .then(response => setCities(response.data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  return (
    <div className="flex">
      <input 
        type="text" 
        placeholder="Search for a doctor" 
        className="border border-gray-400 h-[40px] w-[797px] pl-4" 
      />
      <select 
        className="border border-gray-400 h-[40px] w-[155px] pl-4"
        defaultValue=""
      >
        <option value="" disabled>Type</option>
        {doctorTypes.map((type) => (
          <option key={type.id} value={type.id}>{type.name}</option>
        ))}
      </select>
      <select ç
        className="border border-gray-400 h-[40 px] w-[155px] pl-4"
        defaultValue=""
      >
        <option value="" disabled>City</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
