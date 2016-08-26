import React , {Component} from 'react'
import EditProfile from './EditProfile'
import { Link } from 'react-router'
import UserStore from '../../stores/UserStore'
import ShowProfile from './ShowProfile'

export default class ViewProfile extends Component {
  constructor(){
    super();
    this.state={
      profile : UserStore.get()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      profile: UserStore.get()
    });
  }

  render(){
    let { _id ,username} = this.state.profile;
    return(
      <div>
        <p>{username}'s profile page</p>
        <ShowProfile profile={this.state.profile}/>
        <Link to={{pathname : '/editProfile', query :{ userid : _id }}}>Profile Edit</Link>
      </div>
    )
  }
}
