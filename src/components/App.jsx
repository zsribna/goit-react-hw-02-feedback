import React, {Component} from 'react';
import FeedbackOptions from 'components/FeedbackOption/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };
  addReviewByClick = reviwe => {
    this.setState(previous => {
      return { [reviwe]: previous[reviwe] + 1 };
    });
  };
  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onFeedback={this.addReviewByClick} />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePerc={positiveFeedback} />
          )
            : (
              <Notification message="No feedback" />
            )}
        </Section>
      </div>
    );
  }

}
export default App;