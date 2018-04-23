import React from 'react'
import request from 'superagent'


class ApiTomorrow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherObj: null
    }
    this.getWeather = this.getWeather.bind(this)
  }
  componentWillMount () {
    this.getWeather()
  }

  getWeather () {
    request
      .get('http://api.apixu.com/v1/forecast.json?key=c019052f11644461a6c21207183003&q=Auckland')
      .set('Accept', 'application/json')
      .then(res =>
        this.setState({
          weatherObj: res.body
        })
      )
  }

  render () {
    if (this.state.weatherObj) {
      return (
        <div className='light-container three zoom'>
          <div className='light rainy'></div>
          <div className='name'>
            <h4>{this.state.weatherObj.forecast.forecastday[0].day.condition.text}</h4>
          </div>
        </div>
      )
    }
    return (
      <div>
        </div>
    )
  }
}

export default ApiTomorrow