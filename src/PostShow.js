import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ulstyle = {
    'listStyle': 'none'
}

const tableStyle = {
    'padding': '40px',
    'border': 'groove',
    'borderColor': 'white',
    'borderLeft': '6px solid #70db70',
    'borderRadius': '5px',
    'maxWidth': '800px',
    'width': '50%',
    'margin': 'auto',
    'textTransform': 'capitalize',
    'fontFamily': 'Times New Roman',
    'textAlign': 'left'
}

class PostShow extends React.Component {
    constructor() {
        super()
        this.state = {
            post: {},
            author: {},
            comments: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.postId
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const post = response.data
                this.setState({ post })
                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then(response => {
                        const author = response.data
                        this.setState({ author })
                    })
            })            
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                    .then(response => {
                        const comments = response.data
                        this.setState({ comments })
                    })
    }
    render() {
        return (
            <div>
                <h4>Author : <Link to={`/author-show/${this.state.author.id}`}>{this.state.author.name}</Link></h4>
                <h6><small>Email : {this.state.author.email}</small></h6><br />
                <div style={tableStyle}>
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
                </div>
                Comments -
                <ul style={ulstyle}>
                    {
                        this.state.comments.map(comment => {
                            return (
                                <li key={comment.id}>
                                    <h4>{comment.name}</h4>
                                    <p>{comment.body}</p>
                                    <hr/>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link to='/posts-list'>Back</Link>
            </div>
        )
    }
}

export default PostShow