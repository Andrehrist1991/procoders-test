import React from 'react'
import logo from '../logo.svg';

const Loader = () => {
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3">
                <img className="loader__img" src={logo} alt="Loader"/>
                </div>
            </div>
        </div>
    )
}
export default Loader;
