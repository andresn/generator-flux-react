var React = require('react');
var Store = require('../stores/TodoStore');
var ActionCreator = require('../actions/ActionCreators');
var TaskList = require('./TaskList.jsx');
var mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;

var App = React.createClass({

  getInitialState: function() {
    return {
      tasks: Store.getAll()
    }
  },

  _onChange: function() {
    this.setState({tasks: Store.getAll()});
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  handleAddNewClick: function(e) {
    var title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick: function(e) {
    ActionCreator.clearList();
  },

  render: function() {
    return (
      <div className="example-page">
        <h1>Learning Flux</h1>
        <p>
          Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
          Most features are left unimplemented with clues to guide you on the learning process.
        </p>

        <TaskList tasks={this.state.tasks} />

        <RaisedButton label="Add Task" primary={true} onClick={this.handleAddNewClick} />
        <RaisedButton label="Clear List" secondary={true} onClick={this.handleClearListClick} />
      </div>
    );
  }

});

module.exports = App;
