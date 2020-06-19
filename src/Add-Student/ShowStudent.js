import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Student from '../Bar-contents/Student';
import AddStudent from './AddStudent';

class ShowStudent extends Component{

    constructor(){
        super();
        this.state = {
            DepartmentList:  [
                {
                    ids:1,
                    Reg: '1180000 ',
                    name: 'ram',
                    phone: '9999999999',
                    branch: 'cse'
                },
                {
                    ids:2,
                    Reg: '11804548',
                    name: 'Rohan',
                    phone: '777777777',
                    branch: 'cse'
                }
            ]
        }
    }

    deleteSubscriberHandler = (subescriberId) => {
        let DepartmentList = this.state.DepartmentList;
        let subscriberIndex = 0;
        DepartmentList.forEach(function(subscriber, index){
            if(subscriber.ids === subescriberId){
                subscriberIndex = index;
            }
        }, this);
        let newSubscriber =  DepartmentList;
        newSubscriber.splice(subscriberIndex, 1);
        this.setState({subscriber: newSubscriber});
    }
    addsubscriberHandler = (newsubscriber) => {
        let DepartmentList = this.state.DepartmentList;
        if( DepartmentList.length>0){
            newsubscriber.ids =  DepartmentList[ DepartmentList.length-1].ids+1;
        }
        else{
            newsubscriber.ids=1;
        }
        DepartmentList.push(newsubscriber);
        this.setState({ DepartmentList:  DepartmentList});
    }
    render(){
        return(
          <Router>
              <Route exact path='/' render={(props) => <Student {...props} DepartmentList={this.state.DepartmentList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
              <Route exact path='/add' render={({history}, props) => <AddStudent history={history} {...props} addsubscriberHandler={this.addsubscriberHandler}/>}/>
          </Router>
        )
    }
}

export default ShowStudent;
