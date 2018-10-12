import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'

// import { getAllCafes } from '../cafeApi/cafeApi';
import { fetchAllMilks, fetchAllCafes, displayAllCafes } from '../actions'

import Marker from './Marker';
import SideInfo from './SideInfo';
import Search from './Search'

class Map extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   cafes: [],
    //   activeCafe: {},
    //   searchedMilk: 'all'
    // };

    // this.viewAllCafes = this.viewAllCafes.bind(this);
    this.showSideInfo = this.showSideInfo.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
    // this.activateCafe = this.activateCafe.bind(this);
    // this.searchMilk = this.searchMilk.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchAllMilks())  
    this.props.dispatch(fetchAllCafes())
    this.props.dispatch(displayAllCafes())
  }

  // viewAllCafes() {
  //   getAllCafes().then(res =>
  //     this.setState({
  //       cafes: res
  //     })
  //   );
  // }

  // searchMilk(milk) {
  //   this.setState({
  //     searchedMilk: milk
  //   });
  // }

  showSideInfo(info) {
    document.getElementById('sideInfo').style.width = '300px';
    // this.activateCafe(info);
  }

  // activateCafe(cafe) {
  //   this.setState({
  //     activeCafe: cafe
  //   });
  // }

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
              // if (
              //   this.state.searchedMilk == 'all' ||
              //   cafe[this.state.searchedMilk] == 1
             {
                return (
                  <Marker
                    key={cafe.id}
                    lat={cafe.latitude}
                    lng={cafe.longitude}
                    website={cafe.website}
                    name={cafe.name}
                    cafeId={cafe.id}
                    showSideInfo={this.showSideInfo}
                  />
                );
              }
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
      activeCafes: state.cafes.activeCafe
  }
}

export default connect(mapStateToProps)(Map);
