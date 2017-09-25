import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// Actions
import { addStudentSkill } from '../../actions/actions_students';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

class AddSkill extends Component {
   constructor(props){
      super(props)
      this.state = {
         open: false,
         date: 'date',
         skill: 'skill',
         score: 0

      }
      this.handleClose = this.handleClose.bind(this)
      this.handleOpen = this.handleOpen.bind(this)
      this.handleSkillChange = this.handleSkillChange.bind(this)
      this.handleDateChange = this.handleDateChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleClose() {
      this.setState({ open: false })
   }

   handleOpen() {
      this.setState({ open: true })
   }

   renderOption(){
      let { skills } = this.props;

      return _.map(skills, skill => {
         return (
            <option key={ skill.id } value={ skill.id }>{ skill.skill_title }</option>
         )
      })
   }

   handleSkillChange(event, index, value){
         this.setState({skill: value})
   }

   handleDateChange(x, event){
      this.setState({ date: event })
   }

   handleSubmit(){

      let values = {
         date: this.state.date,
         skill_id: this.state.skill,
         score: this.state.score,
         student_id: this.props.student_id,
         teacher_id: this.props.user.user_id
      }

      if(this.state.date === 'date' || this.state.skill_id === 'skill' || this.state.score === 0){
         alert('Please Fill Out All Forms')
         this.handleClose()
      } else {
         this.props.addStudentSkill(values)
            .then( this.handleClose() )
      }
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

      const items = [];

      let { skills } = this.props;

         for (let i = 0; i < skills.length; i++ ) {
            items.push(<MenuItem value={skills[i].id} key={skills[i].id} primaryText={`${skills[i].skill_title}`} />);
          }

      return (
         <div>
               <MuiThemeProvider>
                     <div>
                              <RaisedButton 
                              label="+ SKILL" 
                              primary={ true }
                              onClick={this.handleOpen}
                              />
                        </div>
              </MuiThemeProvider>
         
              <MuiThemeProvider>
                  <div>
                  <Dialog
                  title="Add Skill"
                  actions= { actions }
                  modal={ false }
                  open={ this.state.open }
                  onRequestClose= { this.handleClose }
                  >
                        <DatePicker hintText='Enter Date' onChange={ (x, event) => this.handleDateChange(x, event) }/>
                        <Divider />
                        <SelectField floatingLabelText='Skill' onChange={ this.handleSkillChange } maxHeight={ 200 }>
                        { items }
                        </SelectField>
                        <Divider />
                        <TextField hintText='Score' floatingLabelText='Score' onChange={(event, newValue) => { this.setState({ score: newValue })}} />
                  </Dialog>
                  </div>
              </MuiThemeProvider>
         </div>
      )
   }

} 

function mapStateToProps(state){
   return {
      skills: state.skills,
      user: state.user
   }
}

export default connect(mapStateToProps, { addStudentSkill })(AddSkill)
