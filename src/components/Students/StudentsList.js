import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// Components
import AddSkill from './AddSkill';

// Theme
import {
      Table,
      TableBody,
      TableHeader,
      TableHeaderColumn,
      TableRow,
      TableRowColumn,
    } from 'material-ui/Table';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class StudentsList extends Component {

      renderSkills(student_id){
            let { studentSkills } = this.props;
            
            let skills = [];
            
            for(let i = 0;  i < studentSkills.length; i++){
                  // eslint-disable-next-line
                  if(studentSkills[i].student_id == student_id){
                        skills.push(studentSkills[i])
                  }
            }

            return _.map(skills, skill => {
               return (
               <TableRow key={ skill.id }>
                  <TableRowColumn>{ skill.skill_title }</TableRowColumn>
                  <TableRowColumn>{ skill.score } /100</TableRowColumn>
                  <TableRowColumn>{ skill.completed_date }</TableRowColumn>
               </TableRow>
            )
         })
         
      }

   renderStudentsList(){
      return _.map(this.props.students, student => {
            return (
            <Card key={student.id}>
                  <CardHeader
                        title={`${student.first_name} ${student.last_name}`}
                        subtitle={`Age: ${student.age}`}
                        actAsExpander={ true }
                        showExpandableButton={ true }
                  />
                  <CardText expandable={ true }>
                     <Table selectable={ false } multiSelectable= { false }>
                           <TableHeader displaySelectAll={ false } enableSelectAll={ false }>
                                 <TableRow>
                                    <TableHeaderColumn>Skill</TableHeaderColumn>
                                    <TableHeaderColumn>Score</TableHeaderColumn>
                                    <TableHeaderColumn>Completed Date</TableHeaderColumn>
                                 </TableRow>
                              </TableHeader>
                              <TableBody displayRowCheckbox={ false } stripedRows={ true }>
                                 { this.renderSkills(student.id) }
                              </TableBody>
                        </Table>
                        <br />
                        <AddSkill student_id={ student.id } />
                  </CardText>
            </Card>
            )
      })
   }

   render(){
      return (
         <div>
            { this.renderStudentsList() }
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      students: state.students,
      studentSkills: state.studentSkills
   }
}

export default connect(mapStateToProps, null)(StudentsList)