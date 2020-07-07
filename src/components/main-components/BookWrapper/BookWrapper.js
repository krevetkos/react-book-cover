import React from 'react';
import './BookWrapper.css';
import SizeManager from './../../../servicess/SizeService';

export default class BookWrapper extends React.Component {
    // SizeManager.OneStyle.subscribe(e=> {
    //     console.log();
        
    //     })
    componentDidMount(){
        SizeManager.OneStyle.subscribe(e=>console.log(e))
    }
    render() {
        return (
            <div className="book_wrapper" onClick={()=>{console.log(SizeManager)}}>
                <div id="wrapper">
                    <div id="book">
                        <div className="side" id="side1">1</div>
                        <div className="side" id="side2">2</div>
                        <div className="side" id="side3">3</div>
                        <div className="side" id="side4">4</div>
                        <div className="side" id="side5">5</div>
                        <div className="side" id="side6">6</div>
                    </div>
                </div>
            </div>
        )
    }
}