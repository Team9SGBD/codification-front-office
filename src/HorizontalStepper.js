import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import FieldGroup from './FieldGroup';
import {FormGroup, Form} from 'react-bootstrap';
import {ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import Paper from 'material-ui/Paper';
//import DatePIcker from './DatePIcker';
import DatePicker from "react-bootstrap-date-picker";

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});
const div = {
    color:"inherit",
   justifyContent: "center",
   alignItems: "center",
   marginTop:'5%',
   marginBottom:'4%',
   borderRadius:'15%',
   backgroundColor:'#2196F3',
   width:'30%',
   heigth:'35%',
   marginLeft:'40%',
   //paddingTop:30,
   paddingBottom:15
  };

  const div3 = {
    color:"inherit",
    justifyContent: "center",
    alignItems: "center",
    marginTop:'22%',
    //marginBottom:'7%',
    borderRadius:'15%',
    backgroundColor:'#2196F3',
    width:'30%',
    heigth:'50%',
    marginLeft:'40%',
    //paddingTop:30,
    //paddingBottom:15
  }

  const stepper = {
      width:'107%'
  }

  const div2 = {
    color:"inherit",
    justifyContent: "center",
    alignItems: "center",
    marginTop:60,
    marginBottom:'3.5%',
    borderRadius:'15%',
    backgroundColor:'#2196F3',
    width:'30%',
    heigth:'60%',
    marginLeft:'40%',
    paddingTop:30,
    paddingBottom:30
  }
  const select = {
    marginLeft:'50%',
    margin:'2%',
    width:'25%',
    heigth:'30%',
    //backgroundColor:'white'
    justifyContent:"center",
    alignItems:"center"
  };
  const input = {
    backgroundColor:'white',
    marginTop:'3%',
    margin:'1%',
    width:'35%',
    heigth:'32%'
  
  };
  const button = {
    backgroundColor:'white',
    marginTop:10,
    width:'5%',
    height:30,
    color:'#0080FF',
    marginLeft:'10%'
  };

  const button1 = {
    backgroundColor:'white',
    marginTop:10,
    width:'5%',
    height:30,
    color:'#0080FF'
  }

function getSteps() {
  return ['Informations du compte', 'Vos informations personnelles','Terminer' ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return( 
        <div style={div2}>
            <FieldGroup
                    id="formControlsText"
                    style={input}
                    type="text"
                    placeholder="Username"
                    onChange = {(event,newValue) => this.props.handleInput(event,newValue,this.props.parentstate.username)}
                />
                <br/>
                <FieldGroup
                    id="formControlsEmail"
                    style={input}
                    type="email"
                    placeholder="Email"
                    onChange = {(event,newValue) => this.props.handleInput(event,newValue,this.props.parentstate.email)}
                />
                <br/>
                <FieldGroup 
                    id="formControlsPassword" 
                    style={input}
                    type="password"
                    placeholder="Password"
                    onChange = {(event,newValue) => this.props.handleInput(event,newValue,this.props.parentstate.password)}
                />
                <br/>
                <FieldGroup
                    id="formControlsText"
                    style={input}
                    type="text"
                    placeholder="Téléphone"
                    onChange = {(event,newValue) => this.props.handleInput(event,newValue,this.props.parentstate.telephone)}
                />
        </div>
      );
    case 1:
      return (
        
        <div style={div}> 
        < FieldGroup
                id="formControlsText"
                style={input}
                type="text"
                placeholder="Prenom"
                onChange = {(event,newValue) => this.props.handleInput(event,newValue,this.props.parentstate.prenom)}
              />
            <br/>
        < FieldGroup
                id="formControlsText"
                style={input}
                type="text"
                placeholder="Nom"
                onChange = {(event,newValue) => this.props.handleInput(event,newValue,this.props.parentstate.nom)}
            />

          <FormGroup>
              <ControlLabel>Date de Naissance</ControlLabel>
              <DatePicker id="example-datepicker" selected={this.props.parentstate.dateNaiss} 
              onChange={(event,formatedValue) => this.props.handleinput(event,formatedValue,this.props.parentstate.dateNaiss)} />
                  <HelpBlock>Help</HelpBlock>
          </FormGroup>

        <FormGroup controlId="formControlsSelect" >
            <ControlLabel>Sexe</ControlLabel>
            <FormControl 
                style={select}
                onChange = {(event,newValue) => this.props.handleSelect(event,this.props.parentstate.sexe)}
                componentClass="select" placeholder="Sexe"
            >
                <option value="Masculin">Masculin</option>
                <option value="Feminin">Feminin</option>
            </FormControl>
        </FormGroup>
      
        <FormGroup controlId="formControlsSelect" >
            <ControlLabel>Departement</ControlLabel>
            <FormControl 
                  style={select}
                  onChange = {(event,newValue) => this.props.handleSelect(event,this.props.parentstate.departement)}
                  componentClass="select" placeholder="Departement"
            >
                <option value="Chime">Chime</option>
                <option value="Electrique">Electrique</option>
                <option value="Gestion">Gestion</option>
                <option value="Informatique">Informatique</option>
                <option value="Mecanique">Mecanique</option>

            </FormControl>
        </FormGroup>
          
            <FormGroup controlId="formControlsSelect" >
                <ControlLabel>Formation</ControlLabel>
                <FormControl 
                style={select}
                  onChange = {(event,newValue) => this.props.handleSelect(event,this.props.parentstate.formation)}
                  componentClass="select" placeholder="Formation"
                >
                  <option value="DUT">DUT</option>
                  <option value="DST">DST</option>
                  <option value="DIC">DIC</option>
                  <option value="LICENCE">LICENCE</option>
                  <option value="MASTER">MASTER</option>

                </FormControl>
              </FormGroup>

              <FormGroup controlId="formControlsSelect" >
                <ControlLabel>Niveau</ControlLabel>
                <FormControl style={select}
                  onChange = {(event,newValue) => this.props.handleSelect(event,this.props.parentstate.niveau)}
                  componentClass="select" placeholder="Niveau"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>

                </FormControl>
              </FormGroup>

     </div>   
      ); 
    case 2:
        return (
            <div>
                
                <Paper style={div3} className='classes.root' elevation={4}>
                    <Typography type="headline" component="h3">
                        Validation de votre inscription
                    </Typography>
                    <Typography component="p">
                        Vous etes sur le point de soumettre votre inscription! <br />
                        Clickez sur finish pour valider votre inscription!
                    </Typography>
                </Paper>
            </div>
        );

    default:
      return 'Unknown step';
  }
}

class HorizontalLinearStepper extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  state = {
    activeStep: 0,
    skipped: new Set(),
  };

  isStepOptional = step => {
    return step === -1;
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
    
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    const skipped = new Set(this.state.skipped.values());
    skipped.add(activeStep);
    this.setState({
      activeStep: this.state.activeStep + 1,
      skipped,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper style={stepper} activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography type="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
              <Button style={button} onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
              {this.props.handleClick()}
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                 style={button}
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    style={button}
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button style={button1} 
                    onClick= {this.handleNext}  
                    className={classes.button}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HorizontalLinearStepper);