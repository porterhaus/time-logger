import React, { Component } from 'react';
import helpers from './helpers';
import { Divider, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import './App.css';

class Timer extends Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>
          Start
        </div>
      </div>
    )
  }
}

class ToggleableTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'>
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}

class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create'
    
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' defaultValue={this.props.title} />
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text' defaultValue={this.props.project} />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button'>
              {submitText}
              </button>
              <button className='ui basic red button'>
              Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class EditableTimer extends Component {
  render() {
    if (this.props.editFormOpen) {
      return (
        <TimerForm 
          title={this.props.title}
          project={this.props.project}
        />
      )
    } else {
      return (
        <Timer
          title={this.props.title}
          projecc={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      )
    }
  }
}

class EditableTimerList extends Component {
  render() {
    return (
      <div id='timers'>
        <EditableTimer
          title='Learn React'
          project='Pigeon Doo-Doo'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title='Learn Extreme Ironing'
          project='Web Development'
          elapsed='3890985'
          runningSince={null}
          editFormOpen={false}
        />
      </div>
    )
  }
}

class TimerDashboard extends Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm 
            isOpen={false} 
          />
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header size='large'>Timers</Header>
        <Divider />
        <TimerDashboard />
      </div>
    );
  }
}

export default App;
