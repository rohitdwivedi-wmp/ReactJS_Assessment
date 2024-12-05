// Importing the Axios library
import axios from 'axios';

// Importing the base API URLs for states and cities
import apiUrl from '../utils/apiUrl';

/**
 * Fetches a list of states for a specific country (India) from the API.
 * @returns {Promise<string[]>} - A promise that resolves to an array of state names.
 * @throws {Error} - Throws an error if the API call fails or returns an error.
 */
export const fetchStatesByApi = async () => {
    try {
        // Sending a POST request to fetch states for the country 'India'
        const response = await axios.post(apiUrl.stateURL, {
            country: 'India', // Country parameter
        });

        // Check if the response contains an error
        if (response.data.error) {
            // Throw an error with the message returned by the API
            throw new Error(response.data.msg);
        }

        // Extracting state names from the response
        const stateNames = response.data.data.states.map(state => state.name);

        return stateNames; // Returning an array of state names

    } catch (err) {
        // Throwing a custom error message for the caller
        throw new Error('Failed to fetch states: ' + err.message);
    }
};

/**
 * Fetches a list of cities for a specific state in India from the API. 
 * @param {string} selectedState - The name of the state for which cities are to be fetched.
 * @returns {Promise<string[]>} - A promise that resolves to an array of city names.
 * @throws {Error} - Throws an error if the API call fails or returns an error.
 */
export const fetchCitiesByApi = async (selectedState) => {
    try {
        // Sending a POST request to fetch cities for the selected state
        const response = await axios.post(apiUrl.citiesURL, {
            country: 'India', // Country parameter
            state: selectedState, // State parameter
        });

        // Check if the response contains an error
        if (response.data.error) {
            // Throw an error with the message returned by the API
            throw new Error(response.data.msg);
        }

        // Returning the list of cities as provided in the response
        return response.data.data; // Cities are directly returned from the response

    } catch (err) {
        // Throwing a custom error message for the caller
        throw new Error('Failed to fetch cities: ' + err.message);
    }
};
