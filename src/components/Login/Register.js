import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { registerUser } from '../../actions/actions_user';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

class Register extends Component {
   constructor(props){
      super(props)
      this.state = {
         email: '',
         password: '',
         password_two: '',
         first_name: '',
         last_name: '',
         school: ''
      }
   }

   handleSubmit(){
      let user = {
         email: this.state.email,
         password: this.state.password,
         first_name: this.state.first_name,
         last_name: this.state.last_name,
         school: this.state.school
      }

      if(user.password !== this.state.password_two){
         alert('Passwords do not match.')
      } else {
         this.props.registerUser(user)
      }

   }

   render(){
      return (
            <MuiThemeProvider>
               <div>
               <TextField
               hintText="First"
               floatingLabelText="First Name"
               onChange={(event, newValue) => { this.setState({ first_name: newValue })}}
               />
               <br />
               <TextField
               hintText="Last"
               floatingLabelText="Last Name"
               onChange={(event, newValue) => { this.setState({ last_name: newValue })}}
               />
               <br />
               <TextField
               hintText="School"
               floatingLabelText="School"
               onChange={(event, newValue) => { this.setState({ school: newValue })}}
               />
               <br />
               <TextField
               hintText="Email"
               floatingLabelText="Email"
               onChange={(event, newValue) => { this.setState({ email: newValue })}}
               />
               <br />
               <TextField
               hintText="Password"
               floatingLabelText="Password"
               type="password"
               onChange={(event, newValue) => { this.setState({ password: newValue })}}
               />
               <br />
               <TextField
               hintText="Re-enter Password"
               floatingLabelText="Re-enter Password"
               type="password"
               onChange={(event, newValue) => { this.setState({ password_two: newValue })}}
               />
               <br />
               <RaisedButton
               label="Sign Up"
               primary={ true }
               onClick={ (event) => { this.handleSubmit(event) }}
               />
            </div>
         </MuiThemeProvider>
      )
   }
}

export default connect(null, { registerUser })(Register)