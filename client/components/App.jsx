import React from 'react'
import Sound from 'react-sound'

import FigOne from './FigOne'
import FigTwo from './FigTwo'

const App = () => {
        return (
            <div>
                <h4>Seasonal Affective Thinking</h4>
                <div className='light-container'>
                    <FigOne />
                    <FigTwo />
                </div>
            </div>
        )
    }

export default App