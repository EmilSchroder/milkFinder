import React from 'react'
import { connect } from 'react-redux'

import Searchby from './SearchBy'

class Header extends React.Component {
  constructor(props){
    super(props)


    this.state={
      search: ''
    }
    this.searchTerm = this.searchTerm.bind(this)
  }


  searchTerm(searchWord){
    
    this.setState({
      search: searchWord
    })
    
 
  }
  
  render(){
  return (
        <div className='flex'>
          <Searchby />
          <button onClick={()=>this.props.searchMilk(this.state.search)}>Search Milk</button>
                  <a href='#/addCafe'>add a cafe</a>
        </div>

        /* <input  type='text' 
                name='search' 
                placeholder='cafe or milk'
                onChange={(e) => {
                  this.searchTerm(e.target.value)}}/> */

        /* <button type='button'>Search Cafe</button>
        <button type='button' onClick={()=>this.props.searchMilk(this.state.search)}>Search Milk</button> */

  )

  }
}



export default connect()(Header)
