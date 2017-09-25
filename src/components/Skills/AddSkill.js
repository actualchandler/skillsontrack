import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { createSkill } from '../../actions/actions_skills';

// Themes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class AddSkill extends Component {
   constructor(props){
      super(props)
      this.state = {
         open: false,
         skill_title: '',
         short_desc: '',
         long_desc: '',
         teaching: '',
         video_url: ''
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
      let skill = {
         subcategory_id: this.props.subcategory_id,
         skill_title: this.state.skill_title,
         short_desc: this.state.short_desc,
         long_desc: this.state.long_desc,
         teaching: this.state.teaching,
         video_url: this.state.video_url
      }
      
      this.props.createSkill(skill, () => {
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
               <MuiThemeProvider>
                     <RaisedButton 
                     label="+ SKILL" 
                     primary={ true }
                     onClick={this.handleOpen}
                     />
               </MuiThemeProvider>

                     <MuiThemeProvider>
                        <div>
                        <Dialog
                        title="Add Skill"
                        actions= { actions }
                        modal={ false }
                        open={ this.state.open }
                        onRequestClose= { this.handleClose }
                        autoScrollBodyContent={true}>
                           <Divider />
                           <TextField
                           hintText='Skill'
                           floatingLabelText='Skill'
                           onChange={(event, newValue) => { this.setState({ skill_title: newValue })}}
                           />
                           <Divider />
                           <TextField
                           hintText='Short Description'
                           floatingLabelText='Short Description'
                           multiLine={ true }
                           rows={ 2 }
                           rowsMax={ 3 }
                           onChange={(event, newValue) => { this.setState({ short_desc: newValue })}}
                           />
                           <Divider />
                           <TextField
                           hintText='Long Description'
                           floatingLabelText='Long Description'
                           multiLine={ true }
                           rows={ 4 }
                           max={ 8 }
                           onChange={(event, newValue) => { this.setState({ long_desc: newValue })}}
                           />
                           <Divider />
                           <TextField
                           hintText='Teaching'
                           floatingLabelText='Teaching'
                           rows={ 4 }
                           max={ 8 }
                           onChange={(event, newValue) => { this.setState({ teaching: newValue })}}
                           />
                           <Divider />
                           <TextField
                           hintText='Video URL'
                           floatingLabelText='Video URL'
                           onChange={(event, newValue) => { this.setState({ video_url: newValue })}}
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
      sub: state.sub,
      categorys: state.categorys
   }
}

export default connect(mapStateToProps, { createSkill })(AddSkill)