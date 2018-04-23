import React from 'react'
import Sound from 'react-sound'

import Today from './Today'
import Tomorrow from './Tomorrow'

const Setup = () => {
    return (
        <div className='wrapper'>
            <Today />
            <Tomorrow />
        </div>
    )
}



export default Setup