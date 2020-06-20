import React, {Component} from 'react';
import Image from '../Image/images.jpg';
import Navigation from '../Navigation/Navigation.js';
import './MyMessages.css';
import {Link} from 'react-router-dom';


var background = {backgroundSize : 'cover'};

var lines= {
    position: 'absolute', 
    top: '12%', 
    width: '1363px',
    color: 'black'
  }

var information= {
    position: 'absolute', 
    top: '12%', 
    color: 'white',
}

var li_div = {
    position: 'absolute'
}

class MyMessage extends Component{

    
    onDeletedClick = (subescriberId) => {
        this.props.deleteSubscriberHandler(subescriberId);
      }

    render(){
        return(
            <div>
                <img style = {background} className="images" height="100%" width="100%" responsive src ={Image} alt="images"/>
                <Navigation/>
                <hr style={lines}/>
                <h1 className="head" style={information}><span class="mainhe">Important Information regarding College</span></h1>
                <div style ={li_div} className="themains">
                 {
                   this.props.DepartmentList.map(sub => {
                   return <div key={sub.ids}className="grid-container">
                      <span className="grid-item">{sub.ids}</span>
                      <span className="grid-item">{sub.message}</span>
                      <span className="grid-item">
                      <button className="delete-btn" onClick={this.onDeletedClick.bind(this, sub.ids)}>Delete</button>
                      </span>
              </div>
            })
          }
                <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
                </div>
            </div>
        )
    }
}

export default MyMessage;