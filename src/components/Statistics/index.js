
import s from "./Statistics.module.css";
import PropTypes from 'prop-types';

const Statitics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <ul>
                <li className={s.cauntStatisticks} >Good : {good}</li>
                <li className={s.cauntStatisticks} >Neutral: {neutral}</li>
                <li className={s.cauntStatisticks} >Bad: {bad}</li>
                <li className={s.cauntStatisticks} >Total:  {total}</li>
                <li className={s.cauntStatisticks} >Positive Feedback: {positivePercentage}</li>

            </ul >
        </>
    )
}
Statitics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statitics  
