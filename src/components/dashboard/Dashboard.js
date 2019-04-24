import React, { Component}  from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect }  from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from  'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        //console.log(this.props);
        const { projects, auth, notificacions } = this.props;
        console.log(notificacions);
        if(!auth.uid) return <Redirect to='/signin'></Redirect>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects = { projects } />
                    </div>                    
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notificacions}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notificacions: state.firestore.ordered.notificacions,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects',  orderBy: ['createdAt', 'desc'] },  
      { collection: 'notificacions', limit: 3, orderBy: ['time', 'desc']}    
    ])
  )(Dashboard)