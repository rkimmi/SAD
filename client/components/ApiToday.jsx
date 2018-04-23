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

  // render () {
  //   if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('rain') >= 0) {
  //     return (
  //       <div className='light rainy'></div>
  //     )
  //   } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('cloud') >= 0) {
  //   return (
  //     <div className='light cloudy'></div>
  //   )
  //   } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('sun') >= 0) {
  //   return (
  //     <div className='light sunny'></div>
  //   )
  // } else if (this.state.weatherObj && this.state.weatherObj.current.condition.text.toLowerCase().indexOf('cast') >= 0) {
  //   return (
  //     <div>
  //     <div className='light sunny'></div> 
  //     </div>
  //   )
  // }
  //   return (
  //     <div>
  //     </div>
  //   )
  // }

  render () {
    if (this.state.weatherObj) {
      let temp_f = this.state.weatherObj.current.temp_f
      return (       
        <svg id='circle-box' >
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
          <g transform="translate(90, 90)">
          <circle id='circle' cx={temp_f} cy={temp_f} r={temp_f} filter="url(#blurMe)" />
          </g>
        </svg>
      )
    }
    return (
      <div>
      </div>
    )
  }
}

export default ApiToday