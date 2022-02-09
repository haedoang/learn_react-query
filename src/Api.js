import axios from 'axios';



const api = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/'
})

export const PostAPI = {
    getAll : () =>api.get('posts'),
    getDetail : (no) => api.get(`posts/${no}`),
    getComment : (postId) => api.get(`posts/${postId}/comments`),
    savePost : (obj) => api.post('posts', obj)
}
