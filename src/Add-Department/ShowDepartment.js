import React, {Component} from 'react';
import Department from '../Bar-contents/Departments';
import AddDepartment from './AddDepartment';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 


class ShowDepartment extends Component{

    constructor(){
        super();
        this.state = {
            DepartmentList:  [
                {
                    ids:1,
                    Reg: '11802778 ',
                    name: 'shagun',
                    phone: '7355751091',
                    branch: 'cse'
                },
                {
                    ids:2,
                    Reg: '11804939',
                    name: 'happy',
                    phone: '7988208960',
                    branch: 'cse'
                }
            ]
        }
    }

    deleteSubscriberHandler = (subescriberId) => {
        let  DepartmentList = this.state.DepartmentList;
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
        let  DepartmentList = this.state.DepartmentList;
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
              <Route exact path='/' render={(props) => <Department {...props} DepartmentList={this.state.DepartmentList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
              <Route exact path='/add' render={({history}, props) => <AddDepartment history={history} {...props} addsubscriberHandler={this.addsubscriberHandler}/>}/>
          </Router>
        )
    }
}

export default ShowDepartment;