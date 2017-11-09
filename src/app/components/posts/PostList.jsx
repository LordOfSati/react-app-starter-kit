import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post.jsx'

class PostList extends Component {
    render () {
        let posts = this.props.posts.map(post => {
            return (
                <Post key={post.id} title={post.title} body={post.body} />
            )
        })
        return (
            <div>
                {posts}
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PostList
