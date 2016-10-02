import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute} from 'react-router';

// see variant of 'const Container' at the end below
export const Container = (props) => (
  <div>
    <Nav /> 
    {props.children}
  </div>
);
export const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' 
      to={{
        pathname: '/address/query',
        query: {message: 'Hello from Route Query'}
      }}>Route Query</IndexLink>
  </div>
);
export const Home = () => (
  <h1>Home Sweet Home!</h1>
);
export const Address = (props) => (
  <div>
    <br />
    <IndexLink activeClassName='active' to='/address'>Twitter Feed</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/address/instagram'>Instagram Feed</IndexLink>
    <h1>We are located at 234 5th Avenue, New York, NY, USA.</h1>
      {props.children}
  </div>
);
export const Instagram = () => (
  <h3>Instagram Feed</h3>
);
export const TwitterFeed = () => (
  <h3>Twitter Feed</h3>
);
export const About = (props) => (
  <div>
    <h1>Welcome to the About Page</h1>
    {props.params.name && <h2>Hi there, {props.params.name}!</h2>}
  </div>
);
export const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
);
export const aTitle = () => (
  <h1>testing: Title Component</h1>
);
export const aSubTitle = () => (
  <h1>testing:  SubTitle Component</h1>
);
export const Query = (props) => (
  <h2>{props.location.query.message}</h2>
);
export const NotFound = () => (
  <h1>404: This page is not found!</h1>
);