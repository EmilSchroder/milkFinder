import React from 'react'
import GoogleMapReact from 'google-map-react'
import {getOneCafe} from '../cafeApi/cafeApi'




class Marker extends React.Component {
    constructor(props){
        super(props)
    
            console.log(props)
            
        this.state = {
            cafe: {}
        }

        

        this.viewCafeMark = this.viewCafeMark.bind(this)
    }

    componentDidMount(){
        this.viewCafeMark()
    }

    viewCafeMark(){
   
        getOneCafe(this.props.cafeId)
        .then(res =>
            this.setState({
                cafe: res
            }))
    }


    render(){
        return(
            <React.Fragment>  


            {/* <svg>
                <circle cx="10" cy="10" r="10" fill='red' onClick={()=> this.showInfo(name)}>Emil</circle>
            </svg>  */} */}
            
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
            }} onClick={() => this.props.showSideInfo(this.state.cafe)} >
                Emil
            </div>
              </React.Fragment>     

        )
    }
}
// onClick={()=> this.showSideInfo()}
export default Marker