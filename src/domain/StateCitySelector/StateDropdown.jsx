import React from 'react';

const StateDropdown = ({ states, onStateChange }) => (
    <select
        onChange={(e) => onStateChange(e.target.value)}
        className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
        <option value="">Select a State</option>
        {states.map((state) => (
            <option key={state} value={state}>
                {state}
            </option>
        ))}
    </select>
);

export default StateDropdown;
