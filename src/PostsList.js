import React from 'react'
import axios from 'axios'
import Post from './Post'

const ulstyle = {
    'listStyle': 'none'
}

class PostsList extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            currentPage: 1,
            postsPerPage: 25
        }
    }

    componentDidMount() {
        console.log('component did mount')
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resposne => {
                console.log('Ajax success')
                this.setState({
                    posts: resposne.data
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    handleclick(e) {
        const currentPage = e.target.id
        this.setState({ currentPage })
    }
    render() {
        // pagination logic
        const { posts, currentPage, postsPerPage } = this.state
        const indexOfLastPost = currentPage * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

        //page number logic
        const pageNumbers = []
        for (let i = 1; i <= (posts.length / postsPerPage); i++) {
            pageNumbers.push(i)
        }

        return (
            <div>
                <h3>Listing posts - {this.state.posts.length}</h3>
                <div>
                    {
                        pageNumbers.map(number => {
                            return <button key={number} id={number} onClick={this.handleclick.bind(this)}>{number}</button>
                        })
                    }
                </div>
                <ul style={ulstyle}>
                    {
                        currentPosts.map(post => {
                            return (
                                <Post key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PostsList

