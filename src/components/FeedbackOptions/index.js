// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const keys = Object.keys(options);
    return (

        <div className={s.btnList}>
            {keys.map(key => {
                return (<button
                    key={key}
                    className={s.btnStatisticks}
                    onClick={onLeaveFeedback}
                    name={key}
                >
                    {key}
                </button>)
            })}
        </div>

    )
}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
};
export default FeedbackOptions

