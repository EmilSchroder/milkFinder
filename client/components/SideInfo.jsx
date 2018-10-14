import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'

const baseURL = 'http://localhost:3000/api/'



class SideInfo extends React.Component {
    constructor(props){
        super(props)
    
        
        this.state = {
            cafe: {},
            milks: []
        }
        
        
    }


    componentDidUpdate(prevProps){
        request.get(baseURL+`cafes/${this.props.activeCafe.id}/milks`)
        .then(res => {
            // console.log(res.body,'milks')
            if(this.props.activeCafe!=prevProps.activeCafe){
            this.setState({
                cafe: this.props.activeCafe,
                milks: res.body
            })
        }
        })
        .catch(err => {
            console.log(err)
        })
    }


    render(){
        // console.log(this.state.milks)
        return(
            <div id='sideInfo' className='sidenav'>
                <button className='close' onClick={()=>this.props.closeSideBar()}>&times;</button>
                <div id='sideBarDeets'>
                   
                    <h1>{this.state.cafe['cafe_name' || 'name']}</h1>
                    {this.state.milks.map(milk => {
                        return <p>{milk.milk_type}</p>
                    })}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeCafe: state.cafes.activeCafe
    }
}

export default connect(mapStateToProps)(SideInfo)