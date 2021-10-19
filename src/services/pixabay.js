import axios from "axios"

export class PixabayFetch {
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this._searchQuery = '';
        this._searchPage = 1;
        this.searchPerPage = 12;
    }

    get searchQuery() {
        return this._searchQuery
    }
    set searchQuery(value) {
        return (this._searchQuery = value)
    }
    get searchPage() {
        return this._searchPage
    }
    set searchPage(value) {
        return (this._searchPage = value)
    }

    async searchPhoto() {
        axios.defaults.baseURL = this.baseURL
        this.searchPerPage = window.innerWidth > 1700 ? 15 : 12
        const params = `?key=${this.apiKey}&q=${this.searchQuery}&page=${this.searchPage}&per_page=${this.searchPerPage}`
        try {
            const response = await axios.get(params)
            const data = await response.data.hits
            return data
        } catch (error) {
            console.log(error.message);
        }
    }
}


