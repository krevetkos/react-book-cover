import React from 'react';
import './MainContent.css';

import BookWrapper from './../BookWrapper/BookWrapper';
import BookController from './../BookControllers/BookController';
import SideController from './../SideController/SideController';

export default class Main extends React.Component {
    render() {
        return (<div className='main'>
        <React.Fragment>
            <BookController></BookController> 
            <BookWrapper></BookWrapper>
            <SideController></SideController> 
        </React.Fragment>
        </div>);
    }
}