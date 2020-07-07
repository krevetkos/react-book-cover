import React from 'react';
import './HeaderComponent.css';

export default class Header extends React.Component {
    render () {
        return(
            <div className="header_wrapper">
              <div className="header_logo_wrapper">
                <a href='header' id='header' className="header_link">
                    <img src={require('./../../assets/images/education.png')} alt="Book Wrapper logo" className="header_logo_img"/>
                </a>
            </div>
            <div className="header_download_wrapper">
                <button className="header_download_btn">
                    <img src={require("./../../assets/images/orientation.png")} alt="Book Wrapper download" className="header_download_img"/>
                </button>
            </div>
            <div className="header_user_wrapper">
                <button className="header_user_btn">
                    <img src={require("./../../assets/images/social-media.png")} alt="Book Wrapper user" className="header_user_img"/>
                </button>
            </div>
            </div>
        );
    }
}