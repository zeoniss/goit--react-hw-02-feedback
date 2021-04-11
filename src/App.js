import { Component } from 'react';
import './styles.css';
import Section from './Components/Statistic/';
import FeedbackOptions from './Components/Statistic/FeedbackOptions';
import Statistic from './Components/Statistic/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = options => {
    this.setState(prevstate => ({
      [options]: prevstate[options] + 1,
    }));
  };

  calcTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => (acc += value), 0);
  };

  calcpositivePercentage = () => {
    return Math.round((100 / this.calcTotalFeedback()) * (this.state.good + this.state.neutral));
  };

  render() {
    console.log(this.calcTotalFeedback());
    const options = Object.keys(this.state);
    const total = this.calcTotalFeedback();
    const positivereviews = this.calcpositivePercentage();
    const feedbacksValues = Object.values(this.state);

    return (
      <Section title="Please, give a feedback for us">
        <FeedbackOptions reviews={options} onAddRate={this.onLeaveFeedback} />

        {feedbacksValues.some(rate => rate > 0) ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivereviews}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
