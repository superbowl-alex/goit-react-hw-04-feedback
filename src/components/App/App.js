import React, { Component } from 'react';
import GlobalStyles from 'GlobalStyles';
import Statistics from '../Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../NotificationComponent';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  keysOfState = Object.keys(this.state);

  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    const count = this.keysOfState.reduce((total, key) => {
      return total + this.state[key];
    }, 0);
    return count;
  };

  countPositiveFeedbackPercentage = () => {
    const percentageOfPositiveFeedback = Math.round(
      (this.state['good'] * 100) / this.countTotalFeedback()
    );
    return percentageOfPositiveFeedback || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <GlobalStyles />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.keysOfState}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
