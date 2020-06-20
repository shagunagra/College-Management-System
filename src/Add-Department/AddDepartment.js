import React, {Component} from 'react';
import Image2 from '../Image/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg';
import './AddDepartment.css';
import {Link} from 'react-router-dom';

var background = {backgroundSize : 'cover'};

var texts ={
    position: 'absolute'
}
class AddDepartment extends Component{

    constructor()
    {
        super();
        this.state = {
            ids: 0,
            Reg: ' ',
            name: ' ',
            phone: ' ',
            branch: ' '
        }
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addsubscriberHandler(this.state);
        this.setState({id:0, Reg: '', name: '', phone: '', branch: ' '});
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
                       <label htmlFor="Reg" className="label-control">Id: </label><br/>
                       <input id="Reg" type="text" className="input-control" name="Reg" placeholder="Enter ID" onChange={this.inputChangedHandler}/><br/><br/>
                       <label htmlFor="name" className="label-control">Name: </label><br/>
                       <input id="name" type="text" className="input-control" name="name" placeholder="Enter Name" onChange={this.inputChangedHandler}/><br/><br/>
                       <label htmlFor="phone" className="label-control">Phone: </label><br/>
                       <input id="phone" type="text" className="input-control" name="phone" placeholder="Enter Phone Number" onChange={this.inputChangedHandler}/><br/><br/>
                       <label htmlFor="branch" className="label-control">Branch: </label><br/>
                       <input id="branch" type="text" className="input-control" name="branch" placeholder="Enter Branch" onChange={this.inputChangedHandler}/><br/><br/>
                       <button type="submit" className="add">Add</button>
                </form>
            </div>
        )
    }
}
export default AddDepartment;