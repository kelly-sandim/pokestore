import React from "react";
import Meltan from '../assets/meltan.svg';
import { Button } from 'reactstrap';

const Modal = props => {
    function exitPopUp(){
        document.getElementById("popup").style.display = "none";
    }

    return(        
        <div class="container">
            <div id="popup" class="popup__wrapper">
                <div class="popup__container">

                    <Button className="exit" onClick={ exitPopUp }>X</Button>
                    <img src={Meltan} alt=""/>
                    <h1 className="popup__title">Parabéns!</h1>
                    <p>Sua compra foi finalizada!
                    </p>
                </div>
            </div>
        </div>    
    );
};

export default Modal;