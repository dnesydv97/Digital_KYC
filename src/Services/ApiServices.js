import axios from 'axios'

const api = axios.create({
    baseURL: 'http://onlineaccountopening.westus.cloudapp.azure.com:8172/'
})

export default api;