import { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal, StyledBackdrop } from './ModalStyled';
import { AiOutlineClose } from 'react-icons/ai';
import IconButton from '../IconButton/IconButton';
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnESC);
  }

  closeOnESC = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  closeOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <StyledBackdrop onClick={this.closeOnBackdropClick}>
        <StyledModal>
          <div
            style={{
              width: '70%',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            {this.props.children}
          </div>

          <IconButton onClick={this.props.toggleModal}>
            <AiOutlineClose />
          </IconButton>
        </StyledModal>
      </StyledBackdrop>,
      modalRoot
    );
  }
}

export default Modal;
