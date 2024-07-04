import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const token =  localStorage.getItem('authToken')

const api= axios.create({baseURL , headers:{
   token: `Bearer ${token}` 
}})

export default api