import React, {Component} from 'react';
import Image2 from '../Image/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg';
import './Departments.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';



var background = {backgroundSize : 'cover'};
var textStyle = {
    position: 'absolute',
    textDecoration: 'underline'
  };

var li_div = {
    position: 'absolute'
}

var line= {
  position: 'absolute', 
  top: '12%', 
  width: '1363px',
  color: 'white'
}

class Department extends Component{

    onDeletedClick = (subescriberId) => {
        this.props.deleteSubscriberHandler(subescriberId);
      }

    render(){
        return(
            <div>
                <img style = {background} className="images" height="100%" width="100%" responsive src ={Image2} alt="images"/>
                <Navigation/>
                <hr style={line}/>
                <div className="heading" style={textStyle}>
                    <h1>Add New Department Section</h1>
                </div>
                <div style ={li_div} className="themain">
                <div className="grid-container heading-container">
                   <span className="grid-item name-heading">S.No.</span>
                   <span className="grid-item name-heading">NAME/PHONE</span>
                   <span className="grid-item name-heading">REGSTRATION NO.</span>
                   <span className="grid-item name-heading">BRANCH</span>
                 </div>
                 {
                   this.props.DepartmentList.map(sub => {
                   return <div key={sub.ids}className="grid-container">
                      <span className="grid-item">{sub.ids}</span>
                      <span className="grid-item">{sub.name}{" / "}{sub.phone}</span>
                      <span className="grid-item">{sub.Reg}</span>
                      <span className="grid-item">{sub.branch}</span>
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

export default Department;