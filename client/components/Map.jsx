import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'

// import { getAllCafes } from '../cafeApi/cafeApi';
import { fetchAllMilks, fetchAllCafes, displayAllCafes, findActiveCafe } from '../actions'

import Marker from './Marker';
import SideInfo from './SideInfo';
import Search from './Search'

class Map extends React.Component {
  constructor(props) {
    super(props);


    this.showSideInfo = this.showSideInfo.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);

  }

  componentDidMount() {
    this.props.dispatch(fetchAllMilks())  
    this.props.dispatch(fetchAllCafes())
    this.props.dispatch(displayAllCafes())
  }


  showSideInfo(info) {
    document.getElementById('sideInfo').style.width = '300px';

  }

  closeSideBar() {
    document.getElementById('sideInfo').style.width = '0';
  }

  render() {
    return (
      <React.Fragment>
        <Search />
        <div id="map" style={{ height: '82vh', width: '100%' }}>
          <SideInfo
            closeSideBar={this.closeSideBar}
            activeCafe={this.props.activeCafe}
          />
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyC1GuaSVOn1QvNgS0ysm9mH4V7c7yurAoI'
            }}
            defaultCenter={{ lat: -41.2969757, lng: 174.7742823 }}
            defaultZoom={9}
            onClick={() => this.closeSideBar()}
          >
            {this.props.displayedCafes.map(cafe => {

                return (
                  <Marker
                    key={cafe.cafe_id || cafe.id}
                    lat={cafe.latitude}
                    lng={cafe.longitude}
                    website={cafe.website}
                    name={cafe.cafe_name || cafe.name}
                    cafeId={cafe.cafe_id || cafe.id}
                    showSideInfo={this.showSideInfo}
                    
                  />
                );
              
            })}
          </GoogleMapReact>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
      displayedCafes: state.cafes.currentDisplayedCafes,
      activeCafe: state.cafes.activeCafe
  }
}

export default connect(mapStateToProps)(Map);
