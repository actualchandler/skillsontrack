import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { fetchCategorys, fetchSubs, fetchSkills } from '../../actions/actions_skills';
import { fetchStudents } from '../../actions/actions_students';

// Components
import Login from '../Login/Login';
import Navtab from '../Navtab/Navtab';
import Register from '../Login/Register';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Theme
import { Grid, Row, Col } from 'react-bootstrap';


class Main extends Component {
   constructor(props){
      super(props)
      this.state = {
         user: {},
         component: 'login'
      }
   }

   componentWillReceiveProps(nextProps){
      this.setState({ user: nextProps.user, component: '' })
   }

   render() {
      if(_.isEmpty(this.state.user) && this.state.component === 'login'){
         return (
            <Grid>
               <Row>
                  <Col mdOffset={ 4 } md={ 4 }>
                     <Login />
                     <MuiThemeProvider>
                        <RaisedButton
                           label="Sign Up"
                           primary={ true }
                           onClick={ (event) => { this.setState({ component: 'register'})}}
                        />
                     </MuiThemeProvider>
                  </Col>
               </Row>
            </Grid>
         )
      } else if (this.state.component === 'register'){
         return (
            <Grid>
               <Row>
                  <Col mdOffset= { 4 } md={ 4 }>
                     <Register />
                  </Col>
               </Row>
            </Grid>
         )
      } else {
         return (
            <div>
               <Navtab />
            </div>
         )
      }
   }
}

function mapStateToProps(state) {
   return {
      user: state.user
   }
}

export default connect(mapStateToProps, { fetchCategorys, fetchSubs, fetchSkills, fetchStudents })(Main)