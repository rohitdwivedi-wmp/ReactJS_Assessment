import React, { useState, useEffect } from 'react';
import StateDropdown from './StateDropdown';
import CityDropdown from './CityDropdown';
import SelectionDisplay from './SelectionDisplay';
import { fetchCitiesByApi, fetchStatesByApi } from '../../../services/api-service';
import { toast } from 'react-toastify'

const StateCitySelector = () => {
    // All states and cities
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    // only one State and City for selection
    const [state, setState] = useState('');
    const [city, setCity] = useState('');



    /**
     * Fetch states from API using the service
     * @returns none
     */
    const fetchStates = async () => {
        try {
            const res = await fetchStatesByApi(); // Call the api
            if (res) {
                setStates(res); // Set states in the state
            } else {
                toast.error('Failed to load states.');
            }
        } catch (err) {
            toast.error('Error fetching states: ' + err.message);
        }
    };

    /**
     * Fetch cities based on the selected state using the service
     * @returns none
     */
    const fetchCities = async (selectedState) => {
        try {
            const res = await fetchCitiesByApi(selectedState); // Call the service with the selected state
            if (res) {
                setCities(res); // Set cities in the state
            } else {
                toast.error('Failed to load cities.');
            }
        } catch (err) {
            toast.error('Error fetching cities: ' + err.message);
        }
    };

    /**
     * Handle state change and fetch cities based on selected state
     * @returns none
     */
    const handleStateChange = async (selectedState) => {
        setState(selectedState);
        setCity(''); // Reset city selection due to changing the state
        setCities([]); // Clear cities as dynamic city fetching isn't part of this flow

        if (selectedState) {
            fetchCities(selectedState); // Fetch cities for the selected state
        }
    };

    // Fetch states when the component mounts
    useEffect(() => {
        fetchStates();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-[var(--main-gradient-purple)] via-lime-200 to-[var(--main-gradient-aqua)] p-4">
            <div className="relative top-32 container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8 drop-shadow-md">State and City Selector</h1>

                <div className="bg-white p-6 rounded-lg shadow-lg w-full md:max-w-lg mx-auto space-y-4">
                    {/* State Dropdown */}
                    <StateDropdown
                        states={states}
                        onStateChange={handleStateChange}
                    />

                    {/* City Dropdown */}
                    <CityDropdown
                        cities={cities}
                        onCityChange={setCity}
                        isDisabled={!state}
                    />

                    {/* Shows Selection */}
                    <SelectionDisplay state={state} city={city} />
                </div>
            </div>
        </div>
    );
};

export default StateCitySelector;
