import React from 'react';

const SelectionDisplay = ({ state, city }) => (
    <div className="mt-6 text-gray-800">
        <p className="text-xl font-semibold">Selected State: <span className="font-normal">{state || 'None'}</span></p>
        <p className="text-xl font-semibold">Selected City: <span className="font-normal">{city || 'None'}</span></p>
    </div>
);

export default SelectionDisplay;
