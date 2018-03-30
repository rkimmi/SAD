import React from 'react'
import Sound from 'react-sound'

import request from 'superagent'

import FigOne from './FigOne'
import FigTwo from './FigTwo'

class App extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            weatherObj: {}
        }
        this.getWeather = this.getWeather.bind(this)
    }
    componentDidMount () {
        this.getWeather()
    }

    getWeather () {
        request
        .get('HTTP: http://api.apixu.com/v1/current.json?key=c019052f11644461a6c21207183003&q=Auckland')
        .set('Key', 'c019052f11644461a6c21207183003')
        .set('Accept', 'application/json')
        .then(res =>
        this.setState({
            weatherObj: res.body
        })
    )
    }

    render () {
        return (
            <div>
                <h4>Seasonal Affective Thinking</h4>
                <div className='light-container'>
                    <FigOne mood={this.state.weatherObj}/>
                    <FigTwo />
                </div>
            </div>
        )
    }
}

export default App