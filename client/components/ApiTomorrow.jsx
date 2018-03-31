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
    if (this.state.weatherObj && this.state.weatherObj.forecast.forecastday[0].day.condition.text.includes('rain')) {
      return (
        <div className='light rainy'></div>
      )
    } else if (this.state.weatherObj && this.state.weatherObj.forecast.forecastday[0].day.condition.text.includes('cloud')) {
      return (
        <div className='light cloudy'></div>
      )
    } else if (this.state.weatherObj && this.state.weatherObj.forecast.forecastday[0].day.condition.text.includes('sun')) {
      return (
        <div className='light sunny'></div>
      )
    }
  }
}

export default ApiTomorrow