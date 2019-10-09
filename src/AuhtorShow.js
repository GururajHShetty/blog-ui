import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

const ulstyle = {
    'listStyle': 'none',
    'textAlign': 'left',
    'padding': '40px',
    'border': 'groove',
    'borderColor': 'white',
    'borderLeft': '6px solid #70db70',
    'borderRadius': '5px',
    'maxWidth': '500px',
    'width': '50%',
    'margin': 'auto',
    'textTransform': 'capitalize',
    'fontFamily': 'Times New Roman'
}

class AuhtorShow extends React.Component {
    constructor() {
        super()
        this.state = {
            author: {},
            posts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const author = response.data
                this.setState({ author })
                Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.author.id}`)
                    .then(response => {
                        const posts = response.data
                        this.setState({ posts })
                    })
            })

    }

    render() {
        return (
            <div>
                <h2>Author : {this.state.author && this.state.author.name}</h2>
                <h4>Email : {this.state.author && this.state.author.email}</h4>
                Posts -
                {
                    this.state.author && (
                        <ul style={ulstyle}>
                            {
                                this.state.posts.map(post => {
                                    return <li key={post.id}>
                                        <h4>{post.title}</h4>
                                        <p>{post.body}</p><br /><hr />
                                    </li>
                                })
                            }
                        </ul>
                    )
                }
                <Link to='/posts-list'>Back</Link>
            </div>
        )
    }
}

export default AuhtorShow