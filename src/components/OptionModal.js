import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose={props.hasDeleteSelectedOption}
    contentLabel="Selected option"
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className="modal__title">Selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.hasDeleteSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;
