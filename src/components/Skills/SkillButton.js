import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import Skill from './Skill';

// Theme

const styles = {
   wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    }
}

class SkillButton extends Component {
   
   renderSkill(){
      let { skills } = this.props
      let { sub_id } = this.props

      let skillsPerCategory = [];

      for(let i=0; i < skills.length; i++){
         // eslint-disable-next-line
         if(skills[i].sub_cat_id == sub_id){
            skillsPerCategory.push(skills[i])
         }
      }

      return _.map(skillsPerCategory, skill => {
         return (
               <Skill skill= { skill } key={ skill.id } />
         )
      })
   }

   render() {
      return (
         <div style={ styles.wrapper }>
            { this.renderSkill() }
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      skills: state.skills
   }
}

export default connect(mapStateToProps, null)(SkillButton)