
import css from '../FeedbackOptions/FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
<ul className={css.feedbackList}>
  {options.map(name => {
    return (
      <li key={name}>
        <button className={css.feedbackButton} type="button" name={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      </li>
    );
  })}
</ul>
)



// {
//   option, onLeaveFeedback;
// }
