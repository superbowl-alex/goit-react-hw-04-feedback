import React, { useState, useEffect, useRef } from 'react';
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

  const totalCount = useRef(0);

  const percentageOfPositiveFeedback = useRef(0);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Invalid type of button');
    }
  };

  useEffect(() => {
    totalCount.current = good + neutral + bad;
    percentageOfPositiveFeedback.current = Math.round(
      (good * 100) / totalCount.current
    );
  }, [good, neutral, bad]);

  return (
    <Container>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions options={arrayOptions} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {totalCount.current > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount.current}
            positivePercentage={percentageOfPositiveFeedback.current}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
