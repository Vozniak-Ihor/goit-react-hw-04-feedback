import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackButton/FeedbackButton';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = feedback;

  const onLeaveFeedback = option => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(feedback)}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
