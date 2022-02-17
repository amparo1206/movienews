import React, { Component } from 'react'
import './Home.css'

class Home extends Component{
    constructor() {
        super ()
    }
    render() {
        return <nav className='home'>
            <li>Home</li>
            <li>Artículos</li>
            <li>Recomendaciones</li>
        </nav>
    }
}

export default Home;