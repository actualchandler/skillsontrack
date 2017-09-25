import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// Actions
import { deleteSub } from '../../actions/actions_skills';

// Components
import SkillButton from './SkillButton';
import AddSkill from './AddSkill';

// Theme
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class SubCategory extends Component {

   delete(sub_id){
        this.props.deleteSub(sub_id)
   }
   
   renderSub(){
      let { sub } = this.props

      let subCategorys = [];

      for(let i = 0; i < sub.length; i++){
         if(sub[i].category_id === this.props.category_id){
            subCategorys.push(sub[i])
         }
      }

      return _.map(subCategorys, sub => {
         return (
            <Card key={ sub.id }>
                  <CardHeader
                  title={`${sub.sub_category_title}`}
                  actAsExpander={ true }
                  showExpandableButton={ true }
                  />
                        <CardText expandable={ true }>
                              <SkillButton sub_id={ sub.id } />
                              <br />
                              <AddSkill subcategory_id={ sub.id } />
                              <br />
                              <FloatingActionButton secondary={ true } mini={ true }>
                                    <ContentRemove />
                              </FloatingActionButton>
                        </CardText>
                  </Card>
         )
      }) 
   }

   render(){
      return (
         <div>
            { this.renderSub() }
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      sub: state.sub
   }
}

export default connect(mapStateToProps, { deleteSub })(SubCategory)