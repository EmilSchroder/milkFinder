import React from 'react'
import { connect } from 'react-redux'

import TitleHead from './TitleHead'
import { fetchAllMilks} from '../actions'

// import {addCafe} from '../cafeApi/cafeApi'



class UpdateScreen extends React.Component {
    constructor(props){
        super(props)

        // this.state = {
        //         cafename:'',
        //         lat:'',
        //         lon:'',
        //         Cowcheck: false,
        //         Soycheck: false,
        //         Almondcheck: false,
        //         Coconutcheck: false,
        //         Ricecheck: false
        // }

        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchAllMilks()) 
    }

    handleSubmit(e){
        // addCafe(this.state)
        e.preventDefault()
    }

    handleCheckboxChange(e){
        let key = e.target.name
        this.setState(prevState => ({
            [key]: !prevState[key]
        }))
    }

    handleTextChange(e){
        let key = e.target.name
        let value = e.target.value
        this.setState({
            [key]: value
        })
    }    
        
    

    render(){
        return(

            <div>
                <TitleHead />
                <a href='/#'>Home</a>
                <div className='formwrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Add a Cafe</h1>
                        <input type='text' autocomplete="off" placeholder='Cafe Name' name='cafename' onChange={this.handleTextChange} />
                        <input type='text' autocomplete="off" placeholder='Latitude' name='lat' onChange={this.handleTextChange} />
                        <input type='text' autocomplete="off" placeholder='Longitude' name='lon' onChange={this.handleTextChange} />
                        <div className='addMilks'>
                            {this.props.allMilks.map(milk => {
                                return(
                                    <label>
                                        <input type='checkbox' value={milk.milk_type} />
                                        {milk.milk_type}
                                    </label>
                                )
                            })}
                        </div>
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