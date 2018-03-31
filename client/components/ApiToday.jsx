import React from 'react'
import request from 'superagent'


class ApiToday extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherObj: null
    }
    this.getWeather = this.getWeather.bind(this)
  }
  componentWillMount() {
    this.getWeather()
  }

  getWeather () {
    request
      .get('http://api.apixu.com/v1/current.json?key=c019052f11644461a6c21207183003&q=Auckland')
      .set('Accept', 'application/json')
      .then(res =>
        this.setState({
          weatherObj: res.body
        })
      )
  }

  render () {
    if (this.state.weatherObj && this.state.weatherObj.current.condition.text.includes('Rain' || 'rain')) {
      return (
        <div className='light rainy'></div>
      )
    } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.includes('Cloud' || 'cloud')) {
    return (
      <div className='light cloudy'></div>
    )
    } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.includes('Sun' || 'sun')) {
    return (
      <div className='light sunny'></div>
    )
  }
    return (
      <div>
        {this.state.weatherObj && <h3>{this.state.weatherObj.current.condition.text}</h3>}
      </div>
    )
  }
}

export default ApiToday