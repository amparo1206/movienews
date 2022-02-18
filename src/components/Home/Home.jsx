import React, { Component } from 'react'
import './Home.scss'

class Home extends Component{
    constructor() {
        super ()
    }
    render() {
        return <nav className='home'>
            <li>Home</li>
            <li>Reviews</li>
            <li>Interviews</li>
        </nav>
    }
}

export default Home;