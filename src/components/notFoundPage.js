"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <h2>Oh noes!!</h2>
        <h2>There is no there there ¯\_(ツ)_/¯</h2>
        <p><Link to="app">&lt;&lt; Back to Home</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;