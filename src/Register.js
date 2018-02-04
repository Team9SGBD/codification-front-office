
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import Login from './Login';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FieldGroup from './FieldGroup';
import {Button, FormGroup, Form} from 'react-bootstrap';
import {ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import HorizontalStepper from './HorizontalStepper';
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
      dateNaiss:new Date().toISOString(),
      villeNaiss:'',
      departement:'',
      formation:'',
      niveau:'',
      username:'',
      email:'',
      password:'',
      telephone:''

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect =  this.handleSelect.bind(this);
  }

  handleInput(event,value,prop) {
    this.setState( {prop:value});
  };
  handleSelect(event,prop) {
    this.setState(prop:event.target.value);
  }
  handleClick(){
    /*var apiBaseUrl = "http://localhost:8080/api/";
    
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

   console.log("Registration succesfull");
    

  }
  render() {
    
    const { classes } = this.props;
    return (
      <HorizontalStepper 
            handleInput={this.handleInput}
            handleSelect={this.handleSelect}
            handleClick={this.handleClick}
            parentstate={this.state}
      />
    );
  }
}
const div = {
  color:"inherit",
 justifyContent: "center",
 alignItems: "center",
 marginTop:10,
 borderRadius:10,
 backgroundColor:'#2196F3',
 width:'30%',
 heigth:'10%',
 marginLeft:'35%',
 //paddingTop:30,
 paddingBottom:30
};

const select = {
  marginLeft:'10%',
  margin:10,
  width:'25%',
  heigth:'50%',
  backgroundColor:'white'
};
const appbar = {
  backgroundColor:'#2196F3'
}

const input = {
  backgroundColor:'white',
  marginTop:20

};
const styles= {
  margin:15,
  backgroundColor:'white',
  color:'#0080FF'

};


export default Register;