import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import AddSection from './AddSection';
import Section from '../Bar-contents/Section';

class ShowSection extends Component{

    constructor(){
        super();
        this.state = {
            DepartmentList:  [
                {
                    ids:1,
                    sections: 'K18SJ',
                    year: '2018'
                },
                {
                    ids:2,
                    sections: 'K19SJ',
                    year: '2019'
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
              <Route exact path='/' render={(props) => <Section {...props} DepartmentList={this.state.DepartmentList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
              <Route exact path='/add' render={({history}, props) => <AddSection history={history} {...props} addsubscriberHandler={this.addsubscriberHandler}/>}/>
          </Router>
        )
    }
}

export default ShowSection;