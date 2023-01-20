import { Backdrop, ModalWindow } from './Modal.styled'
import PropTypes from 'prop-types'

export function Modal({ avatarInfo: {src, alt}, closeModal }) {
    return <Backdrop>
        <ModalWindow>
            <img src={src} alt={alt} />
            <button onClick={closeModal} type="button">x</button>
        </ModalWindow>
    </Backdrop>;
}

Modal.propTypes = {
    avatarInfo: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }),
    closeModal: PropTypes.func.isRequired,
}