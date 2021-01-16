
import { Component } from 'react';
import Section from './components/Section'
import FeedbackOptions from './components/FeedbackOptions'
import Statitics from './components/Statistics'
import Notification from "./components/Notification";


export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onCountStatistics = event => {
    const { name } = event.currentTarget;
    this.setState((prevState) => {
      const increment = prevState[name] + 1
      return (
        { [name]: increment }
      )
    })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0)
  }
  countPositiveFeedbackPercentage = () => {
    const PositiveFeedback = Math.round(100 * this.state.good / this.countTotalFeedback())
    return PositiveFeedback
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onCountStatistics}
          />
        </Section>
        <Section title="Statitics">
          {this.countTotalFeedback() === 0 ?
            <Notification message="No feedback given" /> :
            <Statitics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />}


        </Section>
      </>
    )
  }
}


// 
