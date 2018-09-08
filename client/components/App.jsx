import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


import Map from './Map'

const App = () => {
  return (
    <Router>
      <React.Fragment>

        <Map />   
      </React.Fragment>
    </Router>
  )
}

export default App

