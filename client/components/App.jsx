import React from 'react'
import Sound from 'react-sound'

import Today from './Today'
import Tomorrow from './Tomorrow'

const App = () => {
        return (
            <div>
                    <div className='wrapper'>
                        <div className='light-container two'>
                            <Today />
                            <h4> Today </h4>
                        </div>
                        <div className='light-container three'>
                            <Tomorrow  />
                            <h4> Tomorrow </h4>
                        </div>
                    </div>
            </div>
        )
    }



export default App