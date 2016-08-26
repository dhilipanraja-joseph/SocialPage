import React , {Component} from 'react'
import UserActions from '../../actions/UserActions'

export default class ProfileForm extends Component{
  constructor(){
    super();

    this.state={
        //userId : this.props.userId,
        name : '',
        email : '',
        imgurl : ''
    }
    this._onInputChange = this._onInputChange.bind(this);
    this.update = this.update.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  _onInputChange(e){
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
        [key]: value
    });
  }
  update(e){
    e.preventDefault();
    let id = e.target.getAttribute('data-id');
    UserActions.updateProfile(id,this.state);
    // console.log(id);
    // console.log("obj:",this.state);
  }
  resetForm(e){
    e.preventDefault();
    this.setState({
      name : '',
      email : '',
      imgurl : ''
    });
  }
  render(){
    let { name , email , imgurl } = this.state;
    let id = this.props.user;
    //console.log(this.props.user);
    return (
      <form onSubmit={this.update} data-id={id}>
        <div className="form-group">
          <label htmlFor="iname">Name</label>
          <input value={name} type="text" id="iname" required className="form-control" onChange={this._onInputChange} data-statekey="name" placeholder="Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input value={email} type="text" id="email" className="form-control" onChange={this._onInputChange} data-statekey="email" placeholder="@email.com"/>
        </div>
        <div className="form-group">
          <label htmlFor="imgurl">Image</label>
          <input value={imgurl} type="text" id="imgurl" className="form-control" onChange={this._onInputChange} data-statekey="imgurl" placeholder="URL"/>
        </div>
        <button type="submit" >Update</button>
        <button onClick={this.resetForm}>Reset</button>
      </form>
    )
  }
}
