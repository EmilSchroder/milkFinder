import React from 'react'
import GoogleMapReact from 'google-map-react'

class Marker extends React.Component {
    constructor(props){
        super(props)
    console.log(props)
    
    
        this.state = {
            cafe: {}
        }
    }


    render(){
        return(

            <div style={{
                color: 'white', 
                background: 'grey',
                padding: '15px 10px',
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)'
            }}>
                Emil
            </div>
        )
    }
}

export default Marker