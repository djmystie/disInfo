import axios from 'axios'

const API = axios.create({
    baseURL: 'https://api.themeparks.wiki/v1'
})

export default API