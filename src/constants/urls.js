const baseURL = 'https://jsonplaceholder.typicode.com';
const url = {
    todos:{
        base: '/todos'
    },
    albums:{
        base: '/albums'
    },
    comments:{
        base: '/comments'
    },
    posts:{
        byId: (id) => `/posts/${id}`
    }
}
export {baseURL, url}