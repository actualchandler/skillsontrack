import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { createStudent } from '../../actions/actions_students';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';



class AddStudent extends Component {
   constructor(props){
      super(props)
      this.state = {
         open: false,
         first_name: '',
         last_name: '',
         age: 0
      }

      this.handleClose = this.handleClose.bind(this)
      this.handleOpen = this.handleOpen.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleClose() {
      this.setState({ open: false })
   }

   handleOpen() {
      this.setState({ open: true })
   }


   handleSubmit(values){

      let student = {
         first_name: this.state.first_name,
         last_name: this.state.last_name,
         age: this.state.age,
         teacher_id: this.props.user.user_id
      }

      this.props.createStudent(student, () => {
         this.handleClose();
      })
      
   }

   
   render() {
         const actions = [
            <FlatButton
            label="Cancel"
            primary={ true }
            onClick={ this.handleClose }
            />,
            <FlatButton
            label="Submit"
            primary={ true }
            onClick={ this.handleSubmit }
            />
         ];

      return (
         <div>
               
            <MuiThemeProvider>
                  <div>
                     <RaisedButton 
                     label="+ STUDENT" 
                     primary={ true }
                     onClick={this.handleOpen}
                     />
                  </div>
               </MuiThemeProvider>
                  <MuiThemeProvider>
                  <div>
                        <Dialog
                        title="New Student"
                        actions= { actions }
                        modal={ false }
                        open={ this.state.open }
                        onRequestClose={ this.handleClose }
                        >
                              <TextField
                              hintText="First Name"
                              floatingLabelText="First"
                              onChange={(event, newValue) => { this.setState({ first_name: newValue })}} 
                              />
                              <Divider />
                              <TextField
                              hintText="Last Name"
                              floatingLabelText="Last"
                              onChange={(event, newValue) => { this.setState({ last_name: newValue })}} 
                              />
                              <Divider />
                              <TextField
                              hintText="Age"
                              floatingLabelText="Age"
                              onChange={(event, newValue) => { this.setState({ age: newValue })}} 
                              />
                        </Dialog>
                  </div>
                  </MuiThemeProvider>
            </div>
      )
   }
}

function mapStateToProps(state){
   return {
      user: state.user
   }
}

export default connect(mapStateToProps, { createStudent })(AddStudent)