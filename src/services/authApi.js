import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const authApi= axios.create({baseURL})

export default authApi