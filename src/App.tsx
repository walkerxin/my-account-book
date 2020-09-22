import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Tags from 'views/Tags';
import Money from './views/Money';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: #E5E5E5;
  color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route exact path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;