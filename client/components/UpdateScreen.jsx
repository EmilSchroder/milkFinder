import React from 'react'
import TitleHead from './TitleHead'



class UpdateScreen extends React.Component {
    constructor(props){
        super(props)

        this.state={
            facts: {
                cafe: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(e.target.value)
    }

    handleChange(e){
        this.setState({
            facts: {
                [e.target.name]:e.target.value
            }
        })
        console.log(e.target.name);
        
    }
    render(){
        return(

            <div>
                <TitleHead />
                <div>
                   <form onSubmit={this.handleSubmit}>
                       <input name='newName' type='text' placeholder="Cafe Name" onChange={(e)=>{
                           this.handleChange(e)}}/>
                       <input name='newLat' type='text' placeholder="Latitude"/>
                       <input name='newLong' type='text' placeholder="Longitude"/>
                       <div>
                           Milks<br></br>
                           <label>Cow</label>
                            <input name='cow' type='checkbox' onChange={(e)=>{
                           this.handleChange(e)}}></input>
                           <label>soy</label>
                            <input name='soy' type='checkbox' onChange={(e)=>{
                           this.handleChange(e)}}></input>
                           <label>almond</label>
                            <input name='almond' type='checkbox' onChange={(e)=>{
                           this.handleChange(e)}}></input>
                            <label>coconut</label>
                            <input name='coconut' type='checkbox' onChange={(e)=>{
                           this.handleChange(e)}}></input>
                           <label>rice</label>
                            <input name='rice' type='checkbox' onChange={(e)=>{
                           this.handleChange(e)}}></input>
                        </div>
                        <input type='submit'/>
                   </form>
                </div>
            </div>
        )
    }
}

export default UpdateScreen