import React from 'react'
import request from 'superagent';

const googlePlaceURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
const info = '&types=establishment&location=-41.2969757,174.7742823&radius=5000&key=AIzaSyC1GuaSVOn1QvNgS0ysm9mH4V7c7yurAoI'

class AutoCompletePlace extends React.Component{
    constructor(props){
        super(props)

        this.state={
            placeArr: []
        }

        this.placeAPI = this.placeAPI.bind(this)
    }


    placeAPI(e){
        return request.get(googlePlaceURL+`input=${e.target.value}`+info)
                    .then(res => {
                        this.setState({
                            placeArr: res.predictions
                        })
                    })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input type='text' placeholder='API' onChange={this.placeAPI}/>
            </div>
        )
    }
}

export default AutoCompletePlace