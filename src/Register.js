
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      prenom:'',
      nom:'',
      numEtudiant:'',
      numCIN:'',
      sexe:'',
      dateNaiss:'',
      villeNaiss:'',
      departement:'',
      formation:'',
      niveau:'',
      username:'',
      email:'',
      password:''

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:8080/api/";
    
    //To be done:check for empty values before hitting submit
   var self = this;
    var id_account;
    var account={
    "username": this.state.username,
    "email":this.state.email,
    "password":this.state.password
    };
    //console.log(account);
    axios.post(apiBaseUrl+'Accounts',account)
   .then(function (response) {
     console.log(response.data);
     if(response.status === 200){
      console.log("registration successfull");
      id_account=response.data.id;
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
   /*var etudiant = {
      prenom:this.state.prenom,
      nom:this.state.nom,
      numEtudiant:this.state.numEtudiant,
      numCIN:this.state.numCIN,
      sexe:this.state.sexe,
      dateNaiss:this.dateNaiss,
      villeNaiss:this.villeNaiss,
      departement:this.state.departement,
      formation:this.state.formation,
      niveau:this.state.niveau
   };
   //console.log(etudiant);
  
  axios.post(apiBaseUrl+`Accounts/#${id_account}/`,etudiant)
  .then(function(response) {
      if (response.status===200) {
        console.log('registration successfully complete');
      }
      else
        console.log("An error occur please register again");
    })
  .catch(function (error) {
     console.log(error);
   });*/
    

  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Entrez votre prénom"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({prenom:newValue})}
             />
           <br/>
           <TextField
             hintText="Entrez votre nom"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({nom:newValue})}
             />
           <br/>
           
           <br/>
           <TextField
             hintText="Entrez votre username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;