import React from 'react'
import Sound from 'react-sound'

import { Progress } from 'react-sweet-progress';

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
            <div className='light' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>
            <Sound url={this.state.figTwoSound} playStatus={this.state.playStatus} /> 
            <Progress type='circle' theme={{
                    success:
                        { symbol: ' ', color: '#e9aba9' },
                    active: { color: '#f2db82' }
                }}
                    percent={100}/>
            </div>
            </div>
        )
    }
}

export default FigTwo