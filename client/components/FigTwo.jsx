import React from 'react'
import Sound from 'react-sound'

import ApiTwo from './ApiTwo'

class FigTwo extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            isHovered: false,
            figTwoSound: 'sounds/kimmi.wav',
            playStatus: Sound.status.PAUSED
        }
        this.makeSound = this.makeSound.bind(this)
        this.pauseSound = this.pauseSound.bind(this)
    }

    makeSound () {
        this.setState({
            isHovered: true,
            playStatus: Sound.status.PLAYING
            // might change to fig 1 specific
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
                <div className='light zoom' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>
                    <ApiTwo />
                </div>
            </div>
        )
    }
}

export default FigTwo