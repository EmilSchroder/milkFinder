import React from 'react'

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
    <div className='header'>
        <h2>This is a header</h2> 
          <select name="milk"
                onChange={(e) => {
                  this.searchTerm(e.target.value)}}>
            <option value="all">All</option>
            <option value="cow">Cow</option>
            <option value="soy">Soy</option>
            <option value="coconut">Coconut</option>
            <option value="almond">Almond</option>
            <option value="rice">Rice</option>
          </select>
          <button onClick={()=>this.props.searchMilk(this.state.search)}>Search Milk</button>
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



export default Header
