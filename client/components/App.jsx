import React from 'react'
import Sound from 'react-sound'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered: false,
            kimmiSound: 'sounds/kimmi.wav',
            vanSound: 'sounds/vanessa2.wav',
            playKimmiStatus: Sound.status.PAUSED,
            playVanStatus: Sound.status.PAUSED
        }
        this.makeKimmiSound = this.makeKimmiSound.bind(this)
        this.makeVanSound = this.makeVanSound.bind(this)
        this.pauseKimmiSound = this.pauseKimmiSound.bind(this)
        this.pauseVanSound = this.pauseVanSound.bind(this)
    }
 
    makeKimmiSound() {
        this.setState({
            isHovered: true,
            playKimmiStatus: Sound.status.PLAYING
        })
    }

    makeVanSound() {
        this.setState({
            isHovered: true,
            playVanStatus: Sound.status.PLAYING
        })
    }

    pauseKimmiSound() {
        this.setState({
            isHovered: false,
            playKimmiStatus: Sound.status.PAUSED
        })
    }

    pauseVanSound() {
        this.setState({
            isHovered: false,
            playVanStatus: Sound.status.PAUSED
        })
    }

    render() {
        return (
            <div>
                <h4>Seasonal Affective Thinking</h4>
                <div className='light-container'>
                    <div className='van-light' onMouseEnter={this.makeVanSound} onMouseLeave={this.pauseVanSound}>V</div>
                    <Sound url={this.state.vanSound} playStatus={this.state.playVanStatus} /> 
                    <Sound url={this.state.kimmiSound} playStatus={this.state.playKimmiStatus} />
                    <div className='kimmi-light' onMouseEnter={this.makeKimmiSound} onMouseLeave={this.pauseKimmiSound}>K</div>
                </div>
            </div>
        )
    }
}

export default App