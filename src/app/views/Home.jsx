import React, { Component } from 'react'
import PostList from '../components/posts/PostList.jsx'
import PostTagList from '../components/posts/PostTagList.jsx'

class Home extends Component {
    render () {
        let postList = [
            {id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'},
            {id: 2, title: 'qui est esse', body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'},
            {id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'},
            {id: 4, title: 'eum et est occaecati', body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'},
            {id: 5, title: 'nesciunt quas odio', body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'},
            {id: 6, title: 'dolorem eum magni eos aperiam quia', body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'}
        ]
        let postTagList = [
            {tagName: 'Java', count: 10},
            {tagName: 'Microservices', count: 25},
            {tagName: 'Spring Cloud', count: 18},
            {tagName: 'React JS', count: 16},
            {tagName: 'Angular 4', count: 10}
        ]
        return (
            <div id="home-content">
                <div id="banner">
                    <div className="content">
                        <h4 className="display-5 mb-4">Home Page Banner</h4>
                        <p className="lead">And, the description goes here</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <PostList postList={postList} />
                        </div>
                        <div className="col-md-3">
                            <PostTagList postTagList={postTagList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default Home
