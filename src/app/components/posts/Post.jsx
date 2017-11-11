import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {
    render () {
        return (
            <div className="col-sm-12 w-75">
                <div className="card post">
                    <div className="card-block">
                        <h6 className="card-title">{this.props.title}</h6>
                        <p className="card-text sub-text">{this.props.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Post
