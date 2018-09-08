import React from 'react'
import GoogleMapReact from 'google-map-react'

import {getAllCafes} from '../cafeApi/cafeApi'

import Marker from './Marker'

class Map extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            cafes: []
        }
        
        this.viewAllCafes = this.viewAllCafes.bind(this)
    }

    componentDidMount(){
        
        this.viewAllCafes()

    }

    viewAllCafes(){
        getAllCafes()
        .then(res =>
            this.setState({
                cafes: res
            })
            )
    }

    render(){
        return(
            <div style={{ height: '100vh', width: '100%' }}>
            {/* <GoogleMapReact
              bootstrapURLKeys={{key:"AIzaSyC1GuaSVOn1QvNgS0ysm9mH4V7c7yurAoI"}}
              defaultCenter={ {lat: -41.2969757, lng: 174.7742823} }
              defaultZoom={19}
            >
                
            </GoogleMapReact> */}
            {console.log(this.state)}
            {this.state.cafes.map(cafes => {
                return <li>{cafes.cafe}</li>
            })}
            
          </div>
        )
    }
}

export default Map
