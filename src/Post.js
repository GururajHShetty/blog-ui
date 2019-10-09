import React from 'react'
import { Link } from 'react-router-dom'

const h4style = {
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

function Post(props) {
    console.log('Post component')
    return (
        <div>
        <li>
            <h4 style={h4style}><Link to={`/post-show/${props.id}`}>{props.title}</Link></h4>
        </li><br/>
        </div>
    )
}

export default Post