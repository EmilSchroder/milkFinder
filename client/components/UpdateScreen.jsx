import React from 'react'
import TitleHead from './TitleHead'



class UpdateScreen extends React.Component {
    constructor(props){
        super(props)

        this.state={
            meh: ''
        }
    }
    render(){
        return(

            <div>
                <TitleHead />
                <div>
                   <form>
                       <input name='newName' type='text' placeholder="Cafe Name"/>
                       <input name='newLat' type='text' placeholder="Latitude"/>
                       <input name='newLong' type='text' placeholder="Longitude"/>
                       <div>
                           Milks<br></br>
                           <label>Cow</label>
                            <input name='cow' type='checkbox'></input>
                           <label>soy</label>
                            <input name='soy' type='checkbox'></input>
                           <label>almond</label>
                            <input name='almond' type='checkbox'></input>
                            <label>coconut</label>
                            <input name='coconut' type='checkbox'></input>
                           <label>rice</label>
                            <input name='rice' type='checkbox'></input>
                        </div>
                        <input type='submit'/>
                   </form>
                </div>
            </div>
        )
    }
}

export default UpdateScreen