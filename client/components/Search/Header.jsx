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
          <Link to='/addCafe'><button>Add a Cafe</button></Link>
        </div>

  )

  }
}



export default connect()(Header)
