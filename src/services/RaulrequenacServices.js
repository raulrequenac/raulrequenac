import axios from 'axios'

const https = axios.create({
    baseURL: "https://raulrequenac-api.herokuapp.com",
    withCredentials: true
})

const sendEmail = (email) => https.post('/', email)

export default { sendEmail }