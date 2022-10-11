import React, { useState } from 'react';
import GlobalStyles from 'GlobalStyles';
import Statistics from '../Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../NotificationComponent';
import { Container } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  const arrayOptions = Object.keys(options);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('Invalid type of button');
    }
  };

  const totalCount = () => {
    return good + neutral + bad;
  };

  const percentageOfPositiveFeedback = () => {
    return Math.round((good * 100) / totalCount());
  };

  return (
    <Container>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions options={arrayOptions} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {totalCount() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={percentageOfPositiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
