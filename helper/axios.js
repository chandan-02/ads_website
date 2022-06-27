import axios from "axios";
// Setting up base Url for fetching data

const fetcher = axios.create({
    baseURL: process.env.ENV === 'Production' ? '' : 'https://api-adsstore.herokuapp.com/api/v1', //dev
    headers: {
        "Content-Type": "application/json",
        // 'Acess-Control-Allow-Origin':'*',
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        Authorization: `Bearer ${typeof window !== 'undefined' && localStorage.getItem('token')}`,
        Accept: "application/json",
    },
});

export default fetcher;
