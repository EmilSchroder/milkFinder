import React from 'react'
import TitleHead from './TitleHead'



class UpdateScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {
                cafename:'',
                lat:'',
                lon:'',
                Cowcheck: false,
                Soycheck: false,
                Almondcheck: false,
                Coconutcheck: false,
                Ricecheck: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleSubmit(e){
 
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
        console.log(`key: ${key} and value: ${value}`);
        
        this.setState({
            [key]: value
        })
    }    
        
    

    render(){
        return(

            <div>
                <TitleHead />
                <a href='/#'>Home</a><a href='/#/addCafe'>CafeADD</a>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Cafe Name' name='cafename' onChange={this.handleTextChange} />
                    <input type='text' placeholder='Latitude' name='lat' onChange={this.handleTextChange} />
                    <input type='text' placeholder='Longitude' name='lon' onChange={this.handleTextChange} />
                    <label>
                        Cow
                        <input type='checkbox' onClick={this.handleCheckboxChange} name='Cowcheck'/>
                    </label>
                    <label>
                        Soy
                        <input type='checkbox' onClick={this.handleCheckboxChange} name='Soycheck'/>
                    </label>
                    <label>
                        Almond
                        <input type='checkbox' onClick={this.handleCheckboxChange} name='Almondcheck'/>
                    </label>
                    <label>
                        Coconut
                        <input type='checkbox' onClick={this.handleCheckboxChange} name='Coconutcheck'/>
                    </label>
                    <label>
                        Rice
                        <input type='checkbox' onClick={this.handleCheckboxChange} name='Ricecheck'/>
                    </label>
                    <input type='submit' value="Submit"/>
                </form>
            </div>
        )
    }
}

export default UpdateScreen