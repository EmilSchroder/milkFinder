import React from 'react'
import GoogleMapReact from 'google-map-react'
// import {getOneCafe} from '../cafeApi/cafeApi'




class Marker extends React.Component {
    constructor(props){
        super(props)
    
            
        this.state = {
            cafe: {}
        }

        

        this.viewCafeMark = this.viewCafeMark.bind(this)
        this.countMilks = this.countMilks.bind(this)
    }

    // componentDidMount(){
    //     this.viewCafeMark()
        
    // }


    // viewCafeMark(){
   
    //     getOneCafe(this.props.cafeId)
    //     .then(res =>
    //         this.setState({
    //             cafe: res
    //         }))
    // }

    countMilks(){
        let keys = Object.keys(this.state.cafe).filter(milk => this.state.cafe[milk]== 1||0)

        return keys.length
        
    }


    render(){
        return(
            <React.Fragment>

            <figure className='icon'>
            <img src={this.countMilks() > 4 ? './images/fourmilk.png' : (this.countMilks() > 3 ? './images/threemilk.png' : (this.countMilks() > 2 ? './images/twomilk.png': './images/onemilk.png'))} style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} onClick={() => this.props.showSideInfo(this.state.cafe)} />
            <figcaption className='tooltiptext'>{this.state.cafe.cafe}</figcaption>
            </figure>
              </React.Fragment>   

        )
    }
}
export default Marker