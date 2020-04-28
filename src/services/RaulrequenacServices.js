import axios from 'axios'

const http = axios.create({
    baseURL: "http://raulrequenac-api.herokuapp.com",
    withCredentials: true
})

const sendEmail = (email) => http.post('/', email)

export default {sendEmail}