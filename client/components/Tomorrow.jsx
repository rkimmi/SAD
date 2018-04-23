import React from 'react'
import Sound from 'react-sound'

import ApiTomorrow from './ApiTomorrow'

class Tomorrow extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            isHovered: false,
            figTwoSound: 'sounds/test.wav',
            playStatus: Sound.status.PAUSED
        }
        this.makeSound = this.makeSound.bind(this)
        this.pauseSound = this.pauseSound.bind(this)
    }

    makeSound () {
        this.setState({
            isHovered: true,
            playStatus: Sound.status.PLAYING
        })
    }

    pauseSound () {
        this.setState({
            isHovered: false,
            playStatus: Sound.status.PAUSED
        })
    }

    render() {
        return (
            <div>
                <Sound url={this.state.figTwoSound} playStatus={this.state.playStatus} />
                <div className='light' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>
                    <ApiTomorrow />
                </div>
            </div>
        )
    }
}

export default Tomorrow