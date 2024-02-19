const baseURL = 'https://jsonplaceholder.typicode.com'
const urls = {
    users: {
        base: '/users',
        byId: (id) => `/users/${id}`
    },
    posts: {
        base: '/posts',
        byUserId: (userId) => `users/${userId}/posts`,
    },
    comments: {
        getByPostId: (postId) => {
            return `/posts/${postId}/comments`;
        }
    }

}
export {
    baseURL, urls
}