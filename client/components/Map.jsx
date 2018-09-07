import React from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from './Marker'

class Map extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{key:"AIzaSyC1GuaSVOn1QvNgS0ysm9mH4V7c7yurAoI"}}
              defaultCenter={ {lat: -41.2969757, lng: 174.7742823} }
              defaultZoom={19}
            >
            <Marker 
                lat={-41.2969757}
                lng={174.7742823}
                />
              {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              /> */}
            </GoogleMapReact>
          </div>
        )
    }
}

export default Map
