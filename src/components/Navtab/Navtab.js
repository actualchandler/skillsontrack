import React, { Component } from 'react';
// Components
import Students from '../Students/Students';
import Skills from '../Skills/Skills';

// Themes
import { Grid, Row, Col } from 'react-bootstrap';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Face from 'material-ui/svg-icons/action/face';

export default class Navtab extends Component {
   constructor(props){
      super(props)
      this.state = {
         component: 'students',
         user: {}
      }
   }

   renderComponent(){
      if(this.state.component === 'students'){
         return (
           <Grid>
             <Row>
               <Col>
                <br />
                <Students user={ this.state.user } />
                <br />
              </Col>
            </Row>
          </Grid>
         )
      } else if (this.state.component === 'skills'){
         return (
           <Grid>
             <Row>
               <Col>
               <br />
                <Skills user={ this.state.user } />
                <br />
              </Col>
            </Row>
          </Grid>
         )
      }
   }

   handleChange = (value) => {
      this.setState({
        component: value,
      });
    };

   render(){
      return (
            <MuiThemeProvider>
                  <Tabs
                   value={this.state.value}
                  onChange={this.handleChange}
                  >
                        <Tab 
                        icon={<Face />} 
                        label="STUDENTS"
                        value="students">
                          { this.renderComponent() }
                        </Tab>
                        <Tab 
                        icon={<StarBorder />} 
                        label="SKILLS"
                        value="skills">
                          { this.renderComponent() }
                        </Tab>
                  </Tabs>
            </MuiThemeProvider>
      )
   }
}