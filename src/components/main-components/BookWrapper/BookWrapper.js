import React from 'react';
import './BookWrapper.css';
import SizeManager from './../../../servicess/SizeService';

export default class BookWrapper extends React.Component {
    sideOneStyle;
    sideTwoStyle;
    sideThreeStyle;
    sideFourStyle;
    sideFiveStyle;
    sideSixStyle;
    observer;
    componentDidMount(){
        let top;
        let squareThree = document.getElementById('side3');
        this.observer = new MutationObserver(mutations => {
            console.log(mutations)
            top = mutations[0].target
            top = top.offsetTop
          });
        this.observer.observe(squareThree, { attributes: true })
        
        SizeManager.OneStyle.subscribe(e=>{
            this.sideOneStyle = SizeManager.setStyleSideOne(e)
            this.sideTwoStyle  = SizeManager.setStyleSideTwo(e)
            this.sideFourStyle = SizeManager.setStyleSideFour(e)
            this.sideFiveStyle = SizeManager.setStyleSideFive(e)
            this.sideSixStyle = SizeManager.setStyleSideSix(e)
            this.sideThreeStyle = SizeManager.setStyleSideThree(e, top)
        })
    }
    render() {
        return (
            <div className="book_wrapper" onClick={()=>{console.log(this.sideOneStyle)}}>
                <div id="wrapper">
                    <div id="book">
                        <div className="side" id="side1" style={this.sideOneStyle}>1</div>
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