import React from 'react'
import Sound from 'react-sound'

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
            <div className='van-light' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>V</div>
            <Sound url={this.state.figOneSound} playStatus={this.state.playStatus} /> 
            </div>
        )
    }
}

export default FigOne