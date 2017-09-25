import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchStudents, fetchStudentSkills } from '../../actions/actions_students';
import { fetchSkills } from '../../actions/actions_skills';

// Component
import StudentsList from './StudentsList';
import AddStudent from './AddStudent';

class Students extends Component {

   componentWillReceiveProps(nextProps){
      let { user_id } = this.props.user

      if(nextProps.update){
         this.props.fetchStudents(user_id)
         this.props.fetchStudentSkills(user_id)
      }
   }

   componentDidMount(){
      let { user_id } = this.props.user
      this.props.fetchSkills(user_id)
      this.props.fetchStudents(user_id)
      this.props.fetchStudentSkills(user_id)
   }

   render(){
      return (
         <div>
            <StudentsList />
            <br />
            <AddStudent />
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

export default connect(mapStateToProps, { fetchStudents, fetchStudentSkills, fetchSkills })(Students)