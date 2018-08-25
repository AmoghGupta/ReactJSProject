import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props)=>{

    return(
        <Modal
            isOpen= {!!props.selectedOption}
            contentLabel = "Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p> }
            <button className="button" onClick={props.closePopUp}>Ok</button>
        </Modal>
    );
}


export default OptionModal;