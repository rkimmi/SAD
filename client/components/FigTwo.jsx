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
                <div className='light zoom' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}></div>
                    <Sound url={this.state.figTwoSound} playStatus={this.state.playStatus} />
                    <Progress theme={{
                        success:
                            { symbol: ' ', color: '#e9aba9' },
                        active: { symbol: ' ', color: '#f2db82' }
                    }}
                        percent={94} />
                </div>
        )
    }
}

export default FigTwo