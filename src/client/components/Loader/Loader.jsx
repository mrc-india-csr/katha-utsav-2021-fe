import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import '../../styles/main.scss';

const Loader = () => {
    const showLoadingAnimation = useSelector(state => state.RegistrationResponseReducer.displayShowLoader);
    return (
        showLoadingAnimation ? ReactDOM.createPortal(<div id='loader-wrapper'><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>,document.getElementById('loader')) : ''
        );
};

export default Loader;