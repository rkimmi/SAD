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

  getWeather() {
    request
      .get('http://api.apixu.com/v1/current.json?key=c019052f11644461a6c21207183003&q=Auckland')
      .set('Accept', 'application/json')
      .then(res =>
        this.setState({
          weatherObj: res.body
        })
      )
  }

  render() {
    if (this.state.weatherObj) {
      return (
        <div className='light-container three zoom'>
        <div className='light'></div>
          <div className='nametag'>
            <h4 className='name'>'{this.state.weatherObj.current.condition.text}'</h4>
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

    // if (this.state.weatherObj) {
    //   let temp_f = this.state.weatherObj.current.temp_f
    //   return (
        // <svg id='circle-box' >
        //    <filter id="blurMe">
        //     <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        //   </filter>
        //   <g transform="translate(90, 90)">
        //     <circle id='circle' cx={temp_f} cy={temp_f} r={temp_f} filter="url(#blurMe)" />
        //   </g>
        // </svg> 


export default ApiToday