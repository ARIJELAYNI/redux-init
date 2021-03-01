import React, { Component } from 'react'

import axios from 'axios'
class Posts extends Component {
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res =>  console.log(res.data))
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}

export default Posts;