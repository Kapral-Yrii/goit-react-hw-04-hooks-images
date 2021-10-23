import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types'
import s from './Modal.module.css'

export function Modal({image, modalImageDescription, closeModal}) {
    const handleEscape = useCallback((e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }, [closeModal])

    const handleClose = useCallback((e) => {
        if (e.currentTarget === e.target) {
            closeModal()
        }
    }, [closeModal])

    useEffect(() => {
        window.addEventListener('keydown', handleEscape)
        return () => {
            window.removeEventListener('keydown', handleEscape)
        }
    }, [handleEscape])

    return createPortal(
        <div className={s.overlay} onClick={handleClose}>
            <div className={s.modal}>
                <img src={image} alt={modalImageDescription} />
            </div>
            <button className={s.button} type="button" onClick={closeModal}>X</button>
        </div>,
        document.getElementById('modalRoot')
    )
}
    
Modal.propTypes = {
    image: PropTypes.string,
    closeModal: PropTypes.func,
    modalImageDescription: PropTypes.string
} 
    