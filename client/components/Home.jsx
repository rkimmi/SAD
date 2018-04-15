import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
        return (
            <div>
                <div className='home-container'>
                <div className='text-box'>
                <Link to='/sad'><img src='starangel.png'/></Link>
                </div>
                </div>
            </div>
        )
    }



export default Home