import React from 'react'
import GoogleMapReact from 'google-map-react'
import {getOneCafe} from '../cafeApi/cafeApi'



class SideInfo extends React.Component {
    constructor(props){
        super(props)
    

        // this.state = {
        //     cafe: {}
        // }


    }

    // showSideInfo(info){
        
    // }

    render(){
        return(
            <div id='sideInfo' className='sidenav'>
                <button className='close'>&times;</button>
            </div>
        )
    }
}

export default SideInfo