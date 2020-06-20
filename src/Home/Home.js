import React, {Component} from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation.js';
import Image from '../Image/project-proposal-76f0a3e70715ab89442aa753fee01c842643fd3567e49c6083e0664f5b74bbf3.png';

var background = {backgroundSize : 'cover'};
var textStyle = {
  position: 'absolute', 
  top: '25%', 
  left: '4%'
};

var quote = {
  position: 'absolute', 
  top: '40%', 
  left: '4%',
  color: 'lightgrey'
}

var name = {
  position: 'absolute', 
  top: '45%', 
  left: '4%',
  color: 'lightgrey'
}

var line= {
  position: 'absolute', 
  top: '12%', 
  width: '1363px',
  color: 'white'
}

class Home extends Component{
  render(){
    return(
      <div>
        <img style = {background} className="images" height="100%" width="100%" responsive src ={Image} alt="images"/>
        <Navigation/>
        <hr style={line}/>
        <h1 style={textStyle} className="h1_style">Welcome To College Management System</h1>
        <h3 style={quote}>"Education is the most powerful weapon which you can use to change the world."</h3>
        <h4 style={name}>Nelson Mandela</h4>
      </div>
    )
  }
}
export default Home;
