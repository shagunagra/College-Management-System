import React, {Component} from 'react';
import Image2 from '../Image/images.jpg';
import {Link} from 'react-router-dom';
import '../Add-Department/AddDepartment.css';

var background = {backgroundSize : 'cover'};

var texts ={
    position: 'absolute'
}
class AddMessage extends Component{

    constructor()
    {
        super();
        this.state = {
            ids: 0,
            message: ' '
        }
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addsubscriberHandler(this.state);
        this.setState({id:0, message: ' '});
        this.props.history.push("/");
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    
    render(){
        return(
            <div className="main">
                <img style = {background} className="images" height="100%" width="100%" responsive src ={Image2} alt="images"/>
                <form style={texts} onSubmit={this.onFormSubmitted.bind(this)}>
                    <Link to="/"><button className="back_btn">Back</button></Link><br/>
                       <label htmlFor="message" className="label-control">MESSAGE: </label><br/>
                       <input id="message" type="text" className="input-control" name="message" placeholder="Enter New Message" onChange={this.inputChangedHandler}/><br/><br/>
                       <button type="submit" className="add">Add</button>
                </form>
            </div>
        )
    }
}
export default AddMessage;