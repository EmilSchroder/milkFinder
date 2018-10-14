import React from 'react'
import request from 'superagent'

const baseURL = 'https://milkfinder.herokuapp.com/api/'
import {connect} from 'react-redux'
import { updateActiveCafe } from '../actions'





class Marker extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
            numOfMilks: 0
        }

        this.findActiveCafe = this.findActiveCafe.bind(this)
        this.getNumOfMilks = this.getNumOfMilks.bind(this)
        this.selectIcon = this.selectIcon.bind(this)
    }

    componentDidMount(){
        this.getNumOfMilks(this.props.cafeId)
        
    }

    selectIcon(){
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
            this.setState({
                numOfMilks: res.body.length-1
            })
        })
    }

    findActiveCafe(id){
            return request.get(baseURL+`cafes/${id}`)
            .then(res => {
                this.props.dispatch(updateActiveCafe(res.body))
            })
            .catch(err => {
                console.log(err)
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
            }} onClick={() => {
                this.props.showSideInfo();
                this.findActiveCafe(this.props.cafeId)
                }} />
            <figcaption className='tooltiptext'>{this.props.name}</figcaption>
            </figure>
              </React.Fragment>   

        )
    }
}

function mapStateToProps(state){
    return{
        activeCafe: state.cafes.activeCafe
    }
}

export default connect(mapStateToProps)(Marker)