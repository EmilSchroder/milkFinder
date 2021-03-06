import React from 'react'
import { connect } from 'react-redux'

import SearchFor from './SearchFor'




class SearchBy extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            activeSearch: ''
        }

        this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch(e){
        this.setState({
            activeSearch: e.target.value
        })
    }

    render(){
    return(
        <React.Fragment>

                <select onChange={(e) => this.updateSearch(e)}>
                    <option defaultValue>Search by...</option>
                    <option value="milk">Milk</option>
                    <option value="cafe">Cafe</option>
                </select>
            <SearchFor type={this.state.activeSearch} />
            
        </React.Fragment>
        )  
    }      
    

}

export default connect()(SearchBy)