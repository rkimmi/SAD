import React from 'react'
import Sound from 'react-sound'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered: false,
            soundPlaying: 'sounds/vanessa.wav',
            playStatus: Sound.status.PAUSED

        }
        this.makeSound = this.makeSound.bind(this)
        this.pauseSound = this.pauseSound.bind(this)
    }
 
    makeSound() {
        this.setState({
            isHovered: true,
            playStatus: Sound.status.PLAYING
        })
    }

    pauseSound() {
        this.setState({
            isHovered: false,
            playStatus: Sound.status.PAUSED
        })
    }

    render() {
        return (
            <div>
                <h4>Seasonal Affective Thinking</h4>
                <div className='light-container'>
                    <div className='van-light'>V</div>
                    <Sound url={this.state.soundPlaying} playStatus={this.state.playStatus} /> 
                    <div className='kimmi-light' onMouseEnter={this.makeSound} onMouseLeave={this.pauseSound}>K</div>
                </div>
            </div>
        )
    }
}

export default App