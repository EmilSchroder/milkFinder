import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import {Link} from 'react-router-dom'

const baseURL = 'https://milkfinder.herokuapp.com/api/'

import TitleHead from './TitleHead'
import { fetchAllMilks} from '../actions'

// import {addCafe} from '../cafeApi/cafeApi'



class UpdateScreen extends React.Component {
    constructor(props){
        super(props)
        // console.log('props', this.props)

        this.state={
            milks:[]
        }

        // this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.postCafe = this.postCafe.bind(this)
        this.postCafesAndMilks = this.postCafesAndMilks.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.checked = this.checked.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchAllMilks()) 
    }

    handleSubmit(e){
        e.preventDefault()
        this.postCafe(this.state.cafename, this.state.lat, this.state.lon, this.state.web)
            .then(res => {
                // console.log('this is the res.body.id', res.body.id, 'does this work')
                this.postCafesAndMilks(res.body.id, this.state.milks)
            })
    }

    checked(e){
        let newArr = [...this.state.milks]

        if(this.state.milks.find(milk => milk==e.target.value)){
            newArr = newArr.filter(unselectedMilk => unselectedMilk !== e.target.value)
        } else {
            newArr = [...this.state.milks, e.target.value]
        }

         
        // console.log(newArr)
        this.setState({
            milks: newArr
        })
    }

    handleTextChange(e){
        // console.log(e.target.value)
        let key = e.target.name
        let value = e.target.value
        this.setState({
            [key]: value
        })
    }    

    postCafesAndMilks(cafeId, milkIdArray){
        return request.post(baseURL+`cafesandmilks`, {
            'cafeId': cafeId,
            'milkArr': milkIdArray
        })
        .then(res => alert('cafe added'))
        .catch(err => alert(err))
    }

    postCafe(name, lat, long, website){
        return request.post(baseURL+`cafes`, {
                cafe_name: name,
                latitude: lat,
                longitude: long,
                website: website
            })
            .catch(err=> err.status==400 ? alert('cafe already exists') : alert(err))
    }
        
    

    render(){
        // console.log(this.state)
        return(

            <div>
                <TitleHead />
                <a href='/#'>Home</a>
                <div className='formwrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Add a Cafe</h1>

                        <input type='text' autoComplete="off" placeholder='Cafe Name' name='cafename' onChange={this.handleTextChange} />
                        <input type='text' autoComplete="off" placeholder='Latitude' name='lat' onChange={this.handleTextChange} />
                        <input type='text' autoComplete="off" placeholder='Longitude' name='lon' onChange={this.handleTextChange} />
                        <input type='text' autoComplete="off" placeholder='Website' name='web' onChange={this.handleTextChange} />
                        
                        <div className='addMilks'>
                            {this.props.allMilks.map(milk => {
                                return(
                                    <label key={milk.id}>
                                        <input onChange={(e)=> this.checked(e)} type='checkbox' value={milk.id} />
                                        {milk.milk_type}
                                    </label>
                                )
                            })}
                        </div>
                        <input type='submit' />
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        allMilks: state.milks.listOfMilks
    }
}

export default connect(mapStateToProps)(UpdateScreen)