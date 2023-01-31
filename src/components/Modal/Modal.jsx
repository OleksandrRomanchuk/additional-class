//========== helpers ==========
import PropTypes from 'prop-types';

//========== styles ==========
import {
	Backdrop,
	ModalWindow,
	AvatarWrapper,
	Avatar,
	ClostBtn,
} from './Modal.styled';

export function Modal({ avatarInfo: { src, alt }, closeModal }) {
	return (
		<Backdrop>
			<ModalWindow>
				<AvatarWrapper>
					<Avatar src={src} alt={alt} />
				</AvatarWrapper>
				<ClostBtn onClick={closeModal} type="button">
					x
				</ClostBtn>
			</ModalWindow>
		</Backdrop>
	);
}

Modal.propTypes = {
	avatarInfo: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}),
	closeModal: PropTypes.func.isRequired,
};
