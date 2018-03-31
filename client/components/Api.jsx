import React from 'react'

import { Progress } from 'react-sweet-progress';

const Api = (props) => {
  return (
    <div>
      <h3>{props.mood.current.temp_c}</h3>
      <Progress theme={{
                        success:
                            { symbol: ' ', color: '#e9aba9' },
                        active: { symbol: `${props.mood.current.temp_f}`, color: '#f2db82' }
                    }}
                        percent={props.mood.current.temp_f} />
    </div>
  )
}

export default Api