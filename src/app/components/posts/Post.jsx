import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {
    render () {
        return (
            <div className="media post">
                <img className="d-flex mr-3 rounded" src={'http://via.placeholder.com/80/353A3F/FFFFFF?text=' + this.props.id} alt="Generic placeholder image" />
                <div className="media-body">
                    <h6 className="mt-1">{this.props.title}</h6>
                    <p className="sub-text">{this.props.body}</p>
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Post
