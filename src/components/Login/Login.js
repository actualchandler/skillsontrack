import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { fetchUser } from '../../actions/actions_user';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let values = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.fetchUser(values)
  }

   render() {
      return (
                <MuiThemeProvider>
                  <div>
                  <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange = {(event, newValue) => {
                      this.setState({ email: newValue })
                    }} 
                    />
                  <br />
                  <TextField
                    type='password'
                    hintText='Enter Your Password'
                    floatingLabelText='Password'
                    onChange = { (event, newValue) => {
                      this.setState( { password: newValue } ) }}
                    />
                    <br />
                    <RaisedButton 
                      label="Submit" 
                      primary={ true }
                      style= { style }
                      onClick={ (event) => { this.handleClick(event) }} 
                      />
                      </div>
                  </MuiThemeProvider>
      )
   }
}

const style = {
  margin: 15
};

export default connect(null, { fetchUser })(Login)