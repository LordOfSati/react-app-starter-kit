import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostTag extends Component {
    render () {
        return (
            <li className="list-group-item justify-content-start post-tag">
                {this.props.tagName}
                <span className="badge badge-primary badge-pill">{this.props.count}</span>
            </li>
        )
    }
}

PostTag.propTypes = {
    tagName: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}

export default PostTag
