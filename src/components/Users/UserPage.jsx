import React, { Component } from 'react';
import UserService from '../../services/UserService';

class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {user:[]}
    }
//krijgt de id niet mee
    componentDidMount(){
        var userId = this.props.userId;

        UserService.GetById(userId).then((response) => {
            this.setState({user: response.data});
            console.log(this.state.user);
        });
    }
    
    render() { 
        return ( 
            <div className='container'>
                <div className='profile-container'>
                    <p>{this.state.userName}</p>
                    <p>{this.state.email}</p>
                </div>
            </div>
         );
    }
}
 
export default UserPage;