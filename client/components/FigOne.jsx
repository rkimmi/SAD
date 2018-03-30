import React from 'react'
import Sound from 'react-sound'

import { Progress } from 'react-sweet-progress';

class FigOne extends React.Component {
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
            <div>
            <Sound url={this.state.figOneSound} playStatus={this.state.playStatus} /> 
               <div className='light zoom' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>1</div>   
               <Progress theme={{
                    success: { symbol: ' ', color: '#e9aba9' },
                    active: { symbol: ' ', color: '#f2db82' },
                    default: { symbol: ' ', color: '#d63811' },
                    error: { symbol: ' ', color: '' }
                }}
                    percent={20}/>
                    </div>
        )
    }
}

export default FigOne