import React from 'react'
import GoogleMapReact from 'google-map-react'

import {getAllCafes} from '../cafeApi/cafeApi'

import Marker from './Marker'
import SideInfo from './SideInfo'

class Map extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            cafes: []
        }
        
        this.viewAllCafes = this.viewAllCafes.bind(this)
        this.showSideInfo = this.showSideInfo.bind(this)
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

    showSideInfo(info){
        console.log('click');
        document.getElementById("sideInfo").style.width = "250px";
        
    }

    render(){
        return(
            <div id='map' style={{ height: '82vh', width: '100%' }}>
            <SideInfo />
            <GoogleMapReact
              bootstrapURLKeys={{key:"AIzaSyC1GuaSVOn1QvNgS0ysm9mH4V7c7yurAoI"}}
              defaultCenter={ {lat: -41.2969757, lng: 174.7742823} }
              defaultZoom={9}
            >
            
                {this.state.cafes.map(cafes => {                  
                    return <Marker key={cafes.id}
                    lat={cafes.latitude}
                    lng={cafes.longitude}
                    cafeId={cafes.id}
                    showSideInfo={this.showSideInfo}/>
                })}  
            </GoogleMapReact>          
          </div>
        )
    }
}

export default Map
