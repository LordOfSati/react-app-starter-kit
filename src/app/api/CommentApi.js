import request from 'superagent'

const commentUrl = 'https://jsonplaceholder.typicode.com/posts'

const getComments = (postId) => {
    let url = commentUrl + '/' + postId + '/comments'
    return request('GET', url).then(response => {
        console.log(response.body)
    })
}

const CommentApi = {
    getComments
}

export default CommentApi
