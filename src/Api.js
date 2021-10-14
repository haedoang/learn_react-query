import axios from 'axios';



const api = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/'
})

export const PostAPI = {
    getAll : () =>api.get('posts'),
    getDetail : (no) => api.get(`posts/${no}`)
}
