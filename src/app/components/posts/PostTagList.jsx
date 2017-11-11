import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostTag from './PostTag.jsx'

class PostTagList extends Component {
    render () {
        let postTagList = this.props.postTagList.map((postTag, index) => {
            return (
                <PostTag key={index} tagName={postTag.tagName} count={postTag.count} />
            )
        })
        return (
            <ul className="list-group mt-4">
                {postTagList}
            </ul>
        )
    }
}

PostTagList.propTypes = {
    postTagList: PropTypes.array.isRequired
}

export default PostTagList
