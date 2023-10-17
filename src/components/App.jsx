import React, { Component } from 'react'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce(function (acc, el) {
      return acc + el;
    }, 0);
  };
  countPositiveFeedbackPercentage = (good,total) => {
    const positivePercentage = (good * 100) / total
    return total > 0 ? Math.round(positivePercentage) : 0
  }
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state.good, total)

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total ? (
          <Section title="Statistics">
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App