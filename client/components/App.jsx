import React from 'react'
import Sound from 'react-sound'

import request from 'superagent'

import FigOne from './FigOne'
import FigTwo from './FigTwo'
import Api from './Api'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherObj: null
        }
        this.getWeather = this.getWeather.bind(this)
    }
    componentWillMount () {
        this.getWeather ()
    }

    getWeather () {
        request
            .get('http://api.apixu.com/v1/current.json?key=c019052f11644461a6c21207183003&q=Auckland')
            // .set('Key', 'c019052f11644461a6c21207183003')
            .set('Accept', 'application/json')
            .then(res =>
                this.setState({
                    weatherObj: res.body
                })
            )
    }

    render () {
        return (
            <div className='wrapper'>
                <div className='one'>
                    <h4> </h4>
                </div>
                {this.state.weatherObj && <div className='light-container two'>
                    <FigOne mood={this.state.weatherObj} />
                    <h4> Today </h4>
                </div>
                }
                {this.state.weatherObj && <div className='light-container three'>
                    <FigTwo />
                    <h4> Tomorrow </h4>
                </div>
                }
            </div>
        )
    }
}


export default App