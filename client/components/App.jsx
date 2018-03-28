import React from 'react'

class App extends React.Component {
   constructor (props) {
       super (props)
   }

    render() {
        return (
            <div>
                <h4>Seasonal Affective Thinking</h4>
                <div className='light-container'>
                    <div className='van-light'>V</div>
                    <div className='kimmi-light'>K</div>
                </div>
            </div>
        )
    }
}

export default App