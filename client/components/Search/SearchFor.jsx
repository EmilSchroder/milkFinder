import React from 'react'
import { connect } from 'react-redux';

class SearchFor extends React.Component{
    constructor(props){
        super(props)
    }

    grabList(option){
        switch(option){
            case 'milk':
                return (
                    this.props.milks.map(milk => {
                        return <option key={milk.id} value={milk.milk_type}>{milk.milk_type}</option>
                    })
                )
            case 'cafe':
                return (
                    this.props.cafes.map(cafe => {
                        return <option key={cafe.id} value={cafe.cafe_name}>{cafe.cafe_name}</option>
                    })
                )
            default:
                return <option>Select Search Term</option>
        }
    }

    render(){
        return(
            <form>
                <select>
                    {this.grabList(this.props.type)}
                </select>
            </form>
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