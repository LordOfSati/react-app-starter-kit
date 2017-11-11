import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post.jsx'

class PostList extends Component {
    render () {
        let postList = this.props.postList.map(post => {
            return (
                <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            )
        })
        return (
            <div>
                {postList}
            </div>
        )
    }
}

PostList.propTypes = {
    postList: PropTypes.array.isRequired
}

export default PostList
