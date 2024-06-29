
import axios from "axios";

import {FetchImagesResponse} from './components/App/App.types'

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithSearch = async (search: string, page: number): Promise<FetchImagesResponse> => {
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: '12',
        client_id: 'LvIdGNzCPpFilw_7q1bmj5sN1bc22UrHhJ1_IQm2l-U',
        query: search,
    })

    const response = await axios.get<FetchImagesResponse>(`/search/photos?${params}`);
    return {
        results: response.data.results,
        total: response.data.total,
    };
};

