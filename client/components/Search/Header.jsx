import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

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
          {/* there will need to be a linking button here at a later date */}
        </div>

  )

  }
}



export default connect()(Header)
