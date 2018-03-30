import React from 'react'
import Sound from 'react-sound'

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
                <div className='light zoom' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>2</div>
                    <Sound url={this.state.figTwoSound} playStatus={this.state.playStatus} />
                </div>
        )
    }
}

export default FigTwo