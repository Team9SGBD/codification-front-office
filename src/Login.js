import React ,{Component} from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FieldGroup from './FieldGroup';
import {Button} from 'react-bootstrap';


<script src="https://unpkg.com/axios/dist/axios.min.js"></script>


const styl = {
  root: {
    width: '100%',
    }
    //backgroundImage: `url(${background})`
};

const appbar = {
  backgroundColor:'#0080FF'
}


class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  };
  this.handleClick = this.handleClick.bind(this);
 }

 handleClick(event){
  var apiBaseUrl = "https://codificationesp.herokuapp.com/api/";
  var self = this;
  var payload={
  "username":this.state.username,
  "password":this.state.password
  };
  console.log(payload);
  axios.post(apiBaseUrl+"Accounts/Login",payload,{
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
  .then(function (response) {
    console.log(response)
    if (response.status === 200) {
      console.log("Login succesfull");
    var uploadScreen=[];
    //uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    //self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.status === 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
        console.log("Username does not exists");
        alert("Username does not exist");
    }
 })
 .catch(function (error) {
 console.log(error);
 });
}
 

render() {
    return (
      <div color="primary" style={styl}>
            <AppBar position="static" style={appbar}>
              <Toolbar>
                  <Typography type="title" color="inherit">
                    Login
                  </Typography>
              </Toolbar>
            </AppBar>
          <div style={style}>
          <form  >
          
          <FieldGroup
                  style={input}
                  id="formControlsText"
                  type="text"
                  placeholder="Username"
                  onChange = {(event,newValue) => this.setState({username:newValue})}
              />
          <FieldGroup 
            style={input}
            id="formControlsPassword"  
            type="password"
            placeholder="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
          />

             <Button style={button} bsStyle="primary" 
                 onClick={(event) => this.handleClick(event)}>
                Submit</Button>
            </form>
            </div>
      </div>
    );
  }
}
const style = {
 color:"inherit",
 justifyContent: "center",
 alignItems: "center",
marginTop:'5%',
 marginBottom:'3%',
 borderRadius:'15%',
 backgroundColor:'#2196F3',
 width:'30%',
 marginLeft:'35%',
 paddingTop:70,
 paddingBottom:70,
 //backgroundImage: `url(${background})`
 //marginRight:'80%'

 
 /*position: absolute,
  top: '50%',
  left: '50%',
  transform: translate('-50%' , '-50%'),
  //border-radius: 5px*/

};
const styles= {
  margin:30,
  //backgroundColor:'white',
  color:'#0080FF',
  height:40,
  width:'15%'

};
const input = {
  backgroundColor:'white',
  marginTop:20,
  height:20

}
const button = {
  backgroundColor:'white',
  marginTop:20,
  width:'20%',
  height:30,
  color:'#0080FF'
} 

export default Login;