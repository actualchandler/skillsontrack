import React, { Component } from 'react';
import _ from 'lodash';

// Actions

// Components
import SubCategory from './SubCategory'
import AddSub from './AddSub';

// Theme
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

export default class Categorys extends Component {
   renderCategorys(){
      return _.map(this.props.categorys, category => {
         return (
            <Card key={ category.id }>
               <CardHeader
               title={`${category.category_title}`}
               actAsExpander={ true }
               showExpandableButton={ true }
               />
                  <CardText expandable={ true }>
                     <SubCategory category_id={ category.id } key={ category.id } />
                     <Divider />
                     <AddSub category_id={ category.id }/>
                  </CardText>
            </Card>
         )
      })
   }

   render(){
      return (
         <div>
            { this.renderCategorys() }
         </div>
      )
   }
}
