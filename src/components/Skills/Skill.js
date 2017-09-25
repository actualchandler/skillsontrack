import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { deleteSkill } from '../../actions/actions_skills';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
   chip: {
      margin: 4
   }
}

class Skill extends Component {
   constructor(props){
      super(props)
      this.state = {
         open: false,
         skill: []
      }
      this.handleClose = this.handleClose.bind(this)
      this.handleOpen = this.handleOpen.bind(this)
   }

   handleClose(){
      this.setState({ open: false })
   }

   handleOpen(){
      this.setState({ open: true })
   }

   delete(skill_id){
      this.props.deleteSkill(skill_id, 
         () => { this.close() }
      )
   }

   componentDidMount(){
      this.setState({
         skill: this.props.skill
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
         label="Delete"
         secondary={ true }
         onClick={ this.delete }
         />,
      ];

      let { skill } = this.state

      return (
         <span>

               <MuiThemeProvider key={ skill.id }>
                  <Chip
                  onClick={ this.handleOpen }
                  style={ styles.chip }
                  >
                  { skill.skill_title }
                  </Chip>
               </MuiThemeProvider>

               <MuiThemeProvider>
                  <div>
                     <Dialog
                     title={`${ skill.skill_title }`}
                     actions={ actions }
                     modal={ false }
                     open={ this.state.open }
                     onRequestClose={ this.handleClose }
                     autoScrollBodyContent={ true }
                     >
                        <h4>{ skill.short_desc }</h4>
                        <p>{ skill.long_desc }</p>
                        <p>{ skill.teaching }</p>
                        <p>{ skill.video_url }</p>
                     </Dialog>
                  </div>
               </MuiThemeProvider>

            </span>
      )
   }
}

export default connect(null, { deleteSkill })(Skill)