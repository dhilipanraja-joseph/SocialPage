import React , {Component} from 'react'

export default class ShowProfile extends Component {
  render (){
    let { name , imgurl , email } = this.props.profile;
    return (
      <div>
        <img width="150px" src={imgurl} alt="NO_IMAGE"/>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    )
  }
}
