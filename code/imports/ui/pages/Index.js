import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import SEO from '../components/SEO';

const Index = () => (
  <div className="Index">
    <SEO
      schema="AboutPage"
      title="Base"
      description="A starting point for Meteor applications."
      path="/"
      contentType="product"
    />
    <Jumbotron className="text-center">
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.15.0</p>
    </Jumbotron>
  </div>
);

export default Index;
