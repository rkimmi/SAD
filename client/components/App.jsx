import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Setup from './Setup'

const App = () => {
        return (
            <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/sad' component={Setup} />
            </Switch>
        )
    }



export default App