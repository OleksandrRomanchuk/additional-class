//========== helpers ==========
import PropTypes from 'prop-types';

//========== styles ==========
import { Wrapper } from './Container.styled';

const Container = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export { Container };
