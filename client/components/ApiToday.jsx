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
    if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('rain') >= 0) {
      return (
        <div className='light rainy'></div>
      )
    } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('cloud') >= 0) {
    return (
      <div className='light cloudy'></div>
    )
    } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('sun') >= 0) {
    return (
      <div className='light sunny'></div>
    )
  } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('cast') >= 0) {
    return (
      <div>
      <div className='light sunny'></div>
      <img src={`${this.state.weatherObj.current.condition.icon}`} /> 
      </div>
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