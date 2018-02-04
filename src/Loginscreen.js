
import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Login from './Login';
import Register from './Register';
import AppBar from 'material-ui/AppBar';
import logo from './logocoud.jpg';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }

  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
            <div>
               <Button raised color="primary" 
               className='classes.button'  style={style} onClick={(event) => this.handleClick(event)}>
               {this.state.buttonLabel}</Button>
           </div>
        </div>
        <AppBar position="static" style={appbar}>
              <Toolbar>
                  <Typography type="title" >
                    CODIFICATION-COUD-ESP
                  </Typography>
              </Toolbar>
            </AppBar>
      </div>
    );
  }
}
const style = {
  margin: 15,
  backgroundColor:'#0080FF'
};
const appbar = {
  backgroundColor:'#0080FF',
  //backgroundImage:`url(${logo})`,
  color:'white',
  height:140                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
export default Loginscreen;