import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Setup from './Setup'
import Today from './Today'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/sad' component={Setup} />
            </div>
        </Router>
    )
}



export default App