import React from 'react'
import Sound from 'react-sound'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered: false,
            soundPlaying: '',
            playStatus: Sound.status.PAUSED

        }
        this.makeKimmiSound = this.makeKimmiSound.bind(this)
        this.makeVanSound = this.makeVanSound.bind(this)
        this.pauseSound = this.pauseSound.bind(this)
    }
 
    makeKimmiSound() {
        this.setState({
            isHovered: true,
            soundPlaying: 'sounds/three2.wav',
            playStatus: Sound.status.PLAYING

        })
    }

    makeVanSound() {
        this.setState({
            isHovered: true,
            soundPlaying: 'sounds/vanessa.wav',
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
                    <div className='van-light' onMouseEnter={this.makeVanSound} onMouseLeave={this.pauseSound}>V</div>
                    <Sound url={this.state.soundPlaying} playStatus={this.state.playStatus} /> 
                    <div className='kimmi-light' onMouseEnter={this.makeKimmiSound} onMouseLeave={this.pauseSound}>K</div>
                </div>
            </div>
        )
    }
}

export default App