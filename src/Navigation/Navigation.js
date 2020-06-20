import React, {Component} from 'react';
import './Navigation.css';
import ReactDOM from 'react-dom';
import ShowMessage from '../AddMessage/ShowMessage';
import Home from '../Home/Home';
import ShowDepartment from '../Add-Department/ShowDepartment';
import ShowSection from '../Add-Section/ShowSection';
import ShowStudent from '../Add-Student/ShowStudent';


var bar ={
    position: 'absolute', 
    width: '800px', 
    color: 'white'
  }

class Navigation extends Component{

    messsageHandler = () =>{
        ReactDOM.render(<ShowMessage/>,document.getElementById('root'));
    }

    homeHandler = () =>{
        ReactDOM.render(<Home/>,document.getElementById('root'));
    }

    departmentHandler = () =>{
        ReactDOM.render(<ShowDepartment/>,document.getElementById('root'));
    }

    studentHandler = () =>{
        ReactDOM.render(<ShowStudent/>,document.getElementById('root'));
    }

    sectionHandler = () =>{
        ReactDOM.render(<ShowSection/>,document.getElementById('root'));
    }
    render(){
        return(
            <div>
                <ul className="bar" style={bar}>
                    <li className="names" onClick = {this.homeHandler}>HOME</li>
                    <li className="names" onClick = {this.messsageHandler}>MESSAGES</li>
                    <li className="names" onClick = {this.departmentHandler}>DEPARTMENTS</li>
                    <li className="names" onClick = {this.studentHandler}>STUDENTS</li>
                    <li className="names" onClick = {this.sectionHandler}>SECTIONS</li>
                </ul>
            </div>
        )
    }
}
export default Navigation;