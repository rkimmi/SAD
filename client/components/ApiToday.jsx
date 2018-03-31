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
    return (
      <div>
        {this.state.weatherObj && <h3>{this.state.weatherObj.current.condition.text}</h3>}
      </div>
    )
  }
}

export default ApiToday