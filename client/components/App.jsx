import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Sad from './Sad'

const App = () => {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/sad' component={Sad} />
                </Switch>
            </div>
        )
    }



export default App