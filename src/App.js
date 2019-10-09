import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import PostsList from './PostsList'
import PostShow from './PostShow'
import AuthorShow from './AuhtorShow'

function App(props) {
    return (
        <Router>
            <div>
                <h2>Hello God</h2>
                <Link to="/posts-list">Posts List</Link>

                <Route path="/posts-list" component={PostsList} />
                <Route path="/post-show/:postId" component={PostShow} />
                <Route path="/author-show/:id" component={AuthorShow} />
            </div>
        </Router>
    )
}
export default App