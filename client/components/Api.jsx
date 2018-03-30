import React from 'react'

const Api = (props) => {
  return (
    <div>
      <h3>{props.mood.location.country}</h3>
    </div>
  )
}

export default Api