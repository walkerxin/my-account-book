import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  >ul {
    display: flex;
    >li {
      width: 33.3333%;
      text-align: center;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money" />
            <Route exact path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>

        <div>
          <Nav>
            <ul>
              <li>
                <Link to="/tags">标签</Link>
              </li>
              <li>
                <Link to="/money">记一笔</Link>
              </li>
              <li>
                <Link to="/statistics">统计</Link>
              </li>
            </ul>
          </Nav>
        </div>
      </Router>
    </Wrapper>
  );
}

function Statistics() {
  return <h2>统计页</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function NoMatch() {
  return <p>页面不存在，你丫输错了吧！</p>
}

export default App;