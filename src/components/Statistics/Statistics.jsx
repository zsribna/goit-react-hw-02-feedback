import React from 'react'
import css from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.listItems}>{`Good: ${good}`}</li>
      <li className={css.listItems}>{`Neutral: ${neutral}`}</li>
      <li className={css.listItems}>{`Bad: ${bad}`}</li>
      <li className={css.listItems}>{`Total: ${total}`}</li>
      <li className={css.listItems}>{`Positive feedback: ${positivePercentage}%`}</li>
    </ul>
  );
};
