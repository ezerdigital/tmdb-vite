import axios from "axios";
import { BASE_URL, API_KEY_PARAMS } from "../../config";
import { FAKE_POPULARS } from "./fake_data";

export class TVShowAPI {

    // Axios
    static async fetchPopulars() {
        try {
            const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAMS}`);
            return response.data.results;
        } catch (e) {
            console.log(e); 
        }
        //return FAKE_POPULARS;
    }

    static async fetchByTitle(title) {
        try {
            const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAMS}&query=${title}`);
            return response.data.results;
        } catch (e) {
            console.log(e); 
        }
    }

    static async fetchRecommendations(tvShowId) {
        try {
            const response = await axios.get(
                `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAMS}`
            );
            return response.data.results;
        } catch (e) {
            console.log(e); 
        }
    }

}
