import PropTypes from 'prop-types';

export function Button({ text, clickHandler }) {
    return <button type="button" onClick={clickHandler} >{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
}