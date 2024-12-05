import React from 'react';

const CityDropdown = ({ cities, onCityChange, isDisabled }) => (
    <select
        onChange={(e) => onCityChange(e.target.value)}
        disabled={isDisabled}
        className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
        <option value="">Select a City</option>
        {cities.map((city) => (
            <option key={city} value={city}>
                {city}
            </option>
        ))}
    </select>
);

export default CityDropdown;
