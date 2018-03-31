import React from 'react'
import Sound from 'react-sound'

import FigOne from './FigOne'
import FigTwo from './FigTwo'
import ApiOne from './ApiOne'

const App = () => {
        return (
            <div>
                    <div className='wrapper'>
                        <div className='light-container two'>
                            <FigOne  />
                            <h4> Today </h4>
                        </div>
                        <div className='light-container three'>
                            <FigTwo  />
                            <h4> Tomorrow </h4>
                            <ApiOne />
                        </div>
                    </div>
            </div>
        )
    }



export default App