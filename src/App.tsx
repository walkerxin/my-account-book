import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
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
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

function NoMatch() {
  return <p>页面不存在，你丫输错了吧！</p>;
}

export default App;