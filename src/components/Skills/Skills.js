import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchCategorys, fetchSubs, fetchSkills } from '../../actions/actions_skills';

//Components
import SkillsList from './SkillsList';
import AddCategory from './AddCategory';

// Theme

class Skills extends Component {

   componentWillReceiveProps(nextProps){
      let { user_id } = this.props.user

      if(nextProps.update){
         this.props.fetchCategorys(user_id)
         this.props.fetchSkills(user_id)
         this.props.fetchSubs(user_id)
      }
   }

   componentDidMount(){
      let { user_id } = this.props.user
      this.props.fetchCategorys(user_id)
      this.props.fetchSkills(user_id)
      this.props.fetchSubs(user_id)
   }

   render(){
      return (
         <div>
            <SkillsList />
            <br />
            <AddCategory />
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      user: state.user,
      update: state.update
   }
}

export default connect(mapStateToProps, { fetchCategorys, fetchSubs, fetchSkills })(Skills)