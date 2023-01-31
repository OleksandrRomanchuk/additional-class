//========== helpers ==========
import PropTypes from 'prop-types';

//========== styles ==========
import { Btn } from './Button.styled';

export function Button({ text, clickHandler }) {
	return (
		<Btn type="button" onClick={clickHandler}>
			{text}
		</Btn>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
};
