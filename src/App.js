import React, { Component } from 'react';

import FeedbackChoice from './components/FeedbackChoice';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notifications';

class App extends Component {
  static defaultProps = {};
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackChoice onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
