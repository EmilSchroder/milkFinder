import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
        <h2>This is a header</h2> 
        <input type='text' name='search' placeholder='cafe or milk'/>
        <button type='button'>Search Cafe</button>
        <button type='button'>Search Milk</button>
    </React.Fragment>

  )
}

export default Header
