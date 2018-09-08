import React from 'react'
import GoogleMapReact from 'google-map-react'
import {getOneCafe} from '../cafeApi/cafeApi'




class Marker extends React.Component {
    constructor(props){
        super(props)
    
            
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
            </svg>  */}
            
            <img src={this.state.cafe.coconut ? './images/threemilk.png' : (this.state.cafe.almond ? './images/twomilk.png': './images/onemilk.png')} style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} onClick={() => this.props.showSideInfo(this.state.cafe)} />
              </React.Fragment>     

        )
    }
}
// onClick={()=> this.showSideInfo()}
export default Marker