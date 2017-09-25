import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { createSub } from '../../actions/actions_skills';

// Themes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AddSub extends Component {
   constructor(props){
      super(props)
      this.state = {
         open: false,
         subcategory_title: ''
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
     let subcategory = {
       category_id: this.props.category_id,
       title: this.state.subcategory_title,
       // eslint-disable-next-line
       teacher_id: parseInt(this.props.user.user_id)
     }

       this.props.createSub(subcategory, () => {
         this.handleClose();
       })
   }

   render(){

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
           <br />
            <MuiThemeProvider>
              <RaisedButton 
              label="+ SUBCATEGORY" 
              primary={ true }
              onClick={this.handleOpen}
              />
            </MuiThemeProvider>

            <MuiThemeProvider>
              <div>
                <Dialog
                title="Add Subcategory"
                actions= { actions }
                modal={ false }
                open={ this.state.open }
                onRequestClose= { this.handleClose }>
                     <TextField
                     hintText='Subcategory'
                     floatingLabelText='Subcategory'
                     onChange={(event, newValue) => { this.setState({ subcategory_title: newValue })}}
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
      categorys: state.categorys,
      user: state.user
   }
}

export default connect(mapStateToProps, { createSub})(AddSub)