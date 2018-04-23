import React from 'react'
import Sound from 'react-sound'

import Today from './Today'
import Tomorrow from './Tomorrow'

const Setup = () => {
        return (
                    <div className='wrapper'>
                        <div className='light-container two zoom'>
                            <Today />
                            <h4> Today </h4>
                        </div>
                        <div className='light-container three zoom'>
                            <Tomorrow  />
                            <h4> Tomorrow </h4>
                        </div>
                    </div>
        )
    }



export default Setup