import { List } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onFeedback}) {
    return (
        <List>
            {options.map(item => {
                return (
                    <button key={item} type="button" onClick={() => onFeedback(item)}>
                        {item}
                    </button>
                );
            })}
        </List>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFeedback: PropTypes.func.isRequired,
};