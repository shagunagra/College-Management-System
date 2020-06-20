import React, {Component} from 'react';
import Image2 from '../Image/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg';
import '../Add-Department/AddDepartment.css';
import {Link} from 'react-router-dom';

var background = {backgroundSize : 'cover'};

var texts ={
    position: 'absolute'
}
class AddSection extends Component{

    constructor()
    {
        super();
        this.state = {
            ids: 0,
            sections: ' ',
            year: ' '
        }
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addsubscriberHandler(this.state);
        this.setState({id:0, sections: ' ', year: ' '});
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
                       <label htmlFor="sections" className="label-control">Section: </label><br/>
                       <input id="sections" type="text" className="input-control" name="sections" placeholder="Enter New Section" onChange={this.inputChangedHandler}/><br/><br/>
                       <label htmlFor="year" className="label-control">Year: </label><br/>
                       <input id="year" type="text" className="input-control" name="year" placeholder="Enter Year" onChange={this.inputChangedHandler}/><br/><br/>
                       <button type="submit" className="add">Add</button>
                </form>
            </div>
        )
    }
}
export default AddSection;