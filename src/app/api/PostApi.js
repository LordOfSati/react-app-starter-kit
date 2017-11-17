import request from 'superagent'

const postUrl = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = () => {
    return request('GET', postUrl).then(response => {
        console.log(response.body)
    })
}

const PostApi = {
    getPosts
}

export default PostApi
