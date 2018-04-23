import React from 'react'
import Sound from 'react-sound'

import { Progress } from 'react-sweet-progress';

import ApiToday from './ApiToday'

class Today extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            isHovered: false,
            figOneSound: 'sounds/vanessa2.wav',
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
                <div onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>
                <Sound url={this.state.figOneSound} playStatus={this.state.playStatus} /> 
                <ApiToday />
                </div>
        )
    }
}

export default Today