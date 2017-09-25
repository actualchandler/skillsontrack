import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorys from './Category';

class SkillsList extends Component {
   constructor(props){
      super(props)
      this.state = {
         categorys: []
      }
   }

   componentWillReceiveProps(nextProps){
      this.setState({
         categorys: nextProps.categorys
      })
   }

   render(){
      return (
         <div>
            <Categorys categorys={ this.state.categorys } />
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      categorys: state.categorys
   }
}

export default connect(mapStateToProps, null)(SkillsList)