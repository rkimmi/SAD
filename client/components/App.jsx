import React from 'react'
import Sound from 'react-sound'

import FigOne from './FigOne'

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
        this.pauseKimmiSound = this.pauseKimmiSound.bind(this)
    }
 
    makeKimmiSound() {
        this.setState({
            isHovered: true,
            playKimmiStatus: Sound.status.PLAYING
        })
    }


    pauseKimmiSound() {
        this.setState({
            isHovered: false,
            playKimmiStatus: Sound.status.PAUSED
        })
    }


    render() {
        return (
            <div>
                <h4>Seasonal Affective Thinking</h4>
                <div className='light-container'>
                    <FigOne />
                    <Sound url={this.state.kimmiSound} playStatus={this.state.playKimmiStatus} />
                    <div className='kimmi-light' onMouseEnter={this.makeKimmiSound} onMouseLeave={this.pauseKimmiSound}>K</div>
                </div>
            </div>
        )
    }
}

export default App