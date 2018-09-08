import React from 'react'
import GoogleMapReact from 'google-map-react'
import {getOneCafe} from '../cafeApi/cafeApi'



class SideInfo extends React.Component {
    constructor(props){
        super(props)
    
        
        this.state = {
            cafe: {}
        }
        
        
    }

    componentDidUpdate(prevProps){
        if (this.props.activeCafe!=prevProps.activeCafe){

            this.setState({
                cafe: this.props.activeCafe
            })
            
        }
    }


    render(){
        return(
            <div id='sideInfo' className='sidenav'>
                <button className='close' onClick={()=>this.props.closeSideBar()}>&times;</button>
                <div id='sideBarDeets'>
                   
                    <h1>{this.state.cafe.cafe!=undefined ? this.state.cafe.cafe:""}</h1>
                    <p>{this.state.cafe.cow!=undefined ? (this.state.cafe.cow ? "Cow" : "") : ""}</p>
                    <p>{this.state.cafe.soy!=undefined ? (this.state.cafe.soy ? "Soy" : "") : ""}</p>
                    <p>{this.state.cafe.almond!=undefined ? (this.state.cafe.almond ? "Almond" : "") : ""}</p>
                    <p>{this.state.cafe.coconut!=undefined ? (this.state.cafe.coconut ? "Coconut" : "") : ""}</p>

                    
                    <p>{this.state.cafe.rice!=undefined ? (this.state.cafe.rice ? "Rice" : "") : ""}</p>
                </div>
                
            </div>
        )
    }
}

export default SideInfo