import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { createCategory } from '../../actions/actions_skills';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class AddCategory extends Component {
   constructor(props){
      super(props)
      this.state = {
         open: false,
         category_title: ''
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

   handleSubmit(){
      let category = {
         title: this.state.category_title,
         teacher_id: this.props.user.user_id
      }

      this.props.createCategory(category, () => {
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
               <RaisedButton 
               label="+ CATEGORY" 
               primary={ true }
               onClick={this.handleOpen}
               />
            </MuiThemeProvider>
         
         <MuiThemeProvider>
            <div>

               <Dialog
               title="Add Category"
               actions={ actions }
               modal= { false }
               open={ this.state.open }
               onRequestClose={ this.handleClose }>

                        <TextField 
                        hintText='Category' 
                        floatingLabelText='Category' 
                        onChange={(event, newValue) => { this.setState({ category_title: newValue })}} 
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

export default connect(mapStateToProps, { createCategory })(AddCategory)