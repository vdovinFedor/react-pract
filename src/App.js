import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import get from "lodash";
import  Slider from './components/slider/slider-component'

export class App extends React.Component {
    componentDidMount(){
       this.props.onGetPhotos()
    }
  render() {
        console.log(this.props)
      return (
          <div className="App">
              <header className="App-header">
                  <div className='Rover-container'>
                  <h1 align="left" className='Curiosity-Rover'>Curiosity Rover</h1>
                  <p  align="left" className='With-its-rover-named'>With its rover named Curiosity, Mars Science Laboratory mission is part of NASA's Mars Exploration Program, a long-term effort of robotic exploration of the red planet. Curiosity was designed to assess whether Mars ever had an environment able to support small life forms called microbes. In other words, its mission is to determine the planet's "habitability."﻿</p>
                  </div>
              </header>
              <Slider urls={this.props.photos} />
          </div>
      )
  }
}
function mapStateToProps(state) {
    return {
        photos: state.photos
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onGetPhotos: () => {
            const asyncGetPhotos = () => {
               return dispatch => {
                   fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=xbCMISAauNoCfDG8At2hZBdEhkjfoaEQxgTvcEea')
                       .then(response => response.json())
                       .then((data)=> {
                           const photos = data.photos.map((i)=> {return ({id: i.id, src: i.img_src})});
                           dispatch({type: 'INIT', payload: photos})
                       })
               }
            }
            dispatch(asyncGetPhotos())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
