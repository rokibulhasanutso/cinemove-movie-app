import axios from "axios";

const BASE_URL = "https://api.themoviedb.org"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

// you can choose your themoviedb api version
const apiVersion = '3'
const EXACT_BASE_URL = `${BASE_URL}/${apiVersion}`

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
    accept: 'application/json',
}

// exports all api calling methods and we are using axios api library
export const getDataFromAPI = async (url, params) => {
    try {
        const { data } = await axios.get(EXACT_BASE_URL + url, {
            headers,
            params
        })

        return data
    }
    catch (error) {
        console.error(error)
        return error
    }
}
