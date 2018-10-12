import React from 'react'
import GoogleMapReact from 'google-map-react'
import request from 'superagent'
const baseURL = 'http://localhost:3000/api/'
// import {getOneCafe} from '../cafeApi/cafeApi'




class Marker extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
            numOfMilks: 0
        }

        
        this.getNumOfMilks = this.getNumOfMilks.bind(this)
        this.selectIcon = this.selectIcon.bind(this)
    }

    componentDidMount(){
        this.getNumOfMilks(this.props.cafeId)
        
    }

    selectIcon(){
        console.log(this.state.numOfMilks,'yeehaw')
                switch(this.state.numOfMilks){
                    case 1:
                    
                        return './images/onemilk.png'
                    case 2:
                    
                        return './images/twomilk.png'
                    case 3:
                    
                        return './images/threemilk.png'
                    case 4:
                    
                        return './images/fourmilk.png'
                    default:
                    
                        return ''
                }
    }

    getNumOfMilks(id){
        return request.get(baseURL+`cafes/${id}/milks`)
        .then(res => {
            console.log(res.body)
            this.setState({
                numOfMilks: res.body.length-1
            })
        })
    }

    render(){
        return(
            <React.Fragment>

            <figure className='icon'>
            <img src={this.selectIcon()} 
                style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} onClick={() => this.props.showSideInfo()} />
            <figcaption className='tooltiptext'>{this.props.name}</figcaption>
            </figure>
              </React.Fragment>   

        )
    }
}
export default Marker