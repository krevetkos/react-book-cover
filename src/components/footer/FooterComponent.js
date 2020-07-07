import React from 'react';
import './FooterComponent.css';

export default class Footer extends React.Component {
    render() {
        return (<footer className="footer_wrapper" id='footer'>
        <div className="footer_social_icons_wrapper">
            <a href="footer" className="footer_icon_link">
                <img src={require("./../../assets/images/github.png")} alt="Github" className="footer_icon_img"/>
            </a>
            <a href="footer" className="footer_icon_link">
                <img src={require("./../../assets/images/facebook.png")} alt="Facebook" className="footer_icon_img"/>
            </a>
            <a href="footer" className="footer_icon_link">
                <img src={require("./../../assets/images/linkedin.png")} alt="Linked in" className="footer_icon_img"/>
            </a>
        </div>
        <div className="footer_created_by">
            <a href="footer" className="footer_created_by_link">Created by Me</a>
        </div>
        <div className="footer_contacts">
            <p className="footer_contacts_phone footer_contacts_text">+380960000000</p>
            <p className="footer_contacts_email footer_contacts_text">ivannaida8@gmail.com</p>
            <p className="footer_contacts_address footer_contacts_text">Ukraine, Lviv</p>
        </div>
    </footer>);
    }
}