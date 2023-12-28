
/* Commit this 
*as
*hard-code initial states
*/
class TimersDashboard extends React.Component {
/*Adding State 
*to TimersDashBoard */
  state = {
    timers:[
      {
        title: 'Learn React',
        project: 'Front End',
        id: uuid.v4(),
        elapsed: 565327,
        runningSince: Date.now(),
      },
      {
        title: 'Learn NodeJS',
        project: 'Back End',
        id: uuid.v4(),
        elapse: 234546,
        runningSince: null,
      }
    ],
  };
    render() {
      return (
        <div className='ui three coentered grid'>
          <div className='column'>
            <EditableTimerList
              timers = {this.state.timers}
            />
            <ToggleableTimerForm/>
          </div>
        </div>
      );
    }
  }

  class EditableTimerList extends React.Component {

  /*EditableTimerList receives the list of timers as a prop, timers*/
    render() {
      const timers = this.props.timers.map((timer)=>(
        <EditableTimer 
           key = {timer.id}
           id = {timer.id}
           title = {timer.title}
           project = {timer.project}
           elapsed = {timer.elapsed}
           runningSince = {timer.runningSince}
        />
      ));
      return (
        <div id='timers'> 
          {timers}
        </div>
      );
    }
  }
  
  class EditableTimer extends React.Component {
    state = {
      editFormOpen : false,
    };
    render() {
      if (this.state.editFormOpen) {
        return (
          <TimerForm
            id = {this.props.id}
            title={this.props.title}
            project={this.props.project}
          />
        );
      } else {
        return (
          <Timer
            id = {this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
          />
        );
      }
    }
  }
  
  class Timer extends React.Component {
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
      );
    }
  }
  
  class TimerForm extends React.Component {
    render() {
      const submitText = this.props.title ? 'Update' : 'Create';
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
      );
    }
  }

    
  class ToggleableTimerForm extends React.Component {
    state = {
      isOpen : false,
    };


    render() {
      if (this.state.isOpen) {
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
  
  ReactDOM.render(
    <TimersDashboard />,
    document.getElementById('content')
  );
  