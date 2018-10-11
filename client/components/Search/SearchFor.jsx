import React from 'react'
import { connect } from 'react-redux';
import { getRelevantCafes } from '../../actions';

class SearchFor extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data: ''
        }
        this.grabList = this.grabList.bind(this)
        this.register = this.register.bind(this)
    }

    register(e){
        this.setState({
            data: e.target.value
        })
    }

    grabList(option){
        switch(option){
            case 'milk':
                return (
                    this.props.milks.map(milk => {
                        return <option key={milk.id} value={milk.id}>{milk.milk_type}</option>
                    })
                )
            case 'cafe':
                return (
                        
                    this.props.cafes.map(cafe => {
                        return <option key={cafe.id} value={cafe.id}>{cafe.cafe_name}</option>
                    })
                )
            default:
                return 
        }
    }

    render(){
            console.log(this.state)
        return(
            <React.Fragment>
                <select onChange={(e)=> this.register(e)}>
                    <option></option>
                    {this.grabList(this.props.type)}
                </select>
                <button onClick={()=>getRelevantCafes(this.props.type, this.state.data)}>Search</button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        milks: state.milks.listOfMilks,
        cafes: state.cafes.listOfCafes
    }
}

export default connect(mapStateToProps)(SearchFor)