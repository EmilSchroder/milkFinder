import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import UpdateScreen from './UpdateScreen'
import Map from './Map'

const App = () => {
  return (
    <Router>
      <React.Fragment>

        <Route exact path='/' render={(props)=>(
          <Map /> 
        )}/>

                <Route exact path='/addCafe' render={(props)=>(
          <UpdateScreen /> 
        )}/>
          
      </React.Fragment>
    </Router>
  )
}

export default App

