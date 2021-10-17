import { Component } from "react";
import { createPortal } from "react-dom";
import s from './Modal.module.css'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscape)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscape)
    }

    handleEscape = (e) => {
        if (e.key === 'Escape') {
            this.props.closeModal()
        }
    }
    handleClose = (e) => {
        if (e.currentTarget === e.target) {
            this.props.closeModal()
        }
    }
    render() {
        const {image, modalImageDescription, closeModal} = this.props
        return createPortal(
            <div className={s.overlay} onClick={this.handleClose}>
                <div className={s.modal}>
                    <img src={image} alt={modalImageDescription} />
                </div>
                <button className={s.button} type="button" onClick={closeModal}>X</button>
            </div>,
            document.getElementById('modalRoot')
        )
    }
}