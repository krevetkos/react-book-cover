import React from 'react';
import './BookWrapper.css';
import SizeManager from './../../../servicess/SizeService';

import { fromEvent } from 'rxjs';
import { skipUntil, takeUntil } from 'rxjs/operators';

export default class BookWrapper extends React.Component {
  constructor(){
    super()
    this.state  = {
      sideOneStyle: {
        height: '300px',
        width: '300px',
        transform: 'translate3d(150px, 0px, 150px)',
        backgroundColor: 'rgb(128, 128, 128)',
      },
      sideTwoStyle: {
        height: '300px',
        width: '300px',
        backgroundColor: 'rgb(181, 43, 43)',
        transform: 'rotateY(90deg) rotateX(90deg) translate3d(0px, 150px, 150px)'
      },
      sideThreeStyle: {
        height: '300px',
        width: '300px',
        transform: 'rotateY(90deg) rotateX(90deg) translate3d(0px, 150px, -150px)',
        backgroundColor: 'rgb(140, 216, 53)'
      },
      sideFourStyle: {
        bottom: '0',
        height: '300px',
        width: '300px',
        backgroundColor: 'green',
        transform: 'rotateY(90deg) translate3d(0px, 0px, 300px)'
      },
      sideFiveStyle: {
        height: '300px',
        width: '300px',
        backgroundColor: 'rgb(128, 128, 128)',
        transform: 'rotateY(-90deg) translate3d(0px, 0px, 0px)'
      },
      sideSixStyle: {
        height: '300px',
        width: '300px',
        backgroundColor: 'rgb(128, 128, 128)',
        transform: 'rotateY(180deg) translate3d(-150px, 0px, 150px)'
      },

    }
  }


    rotateAngle = {
    transform:'',
    height: '',
    width: ''
    };
    positionX = 10100;
    positionY = 10100;
    mouseX;
    mouseY;
    sub;
    mousedown$;
    mouseup$;

    // sideOneStyle;
    // sideTwoStyle;
    // sideThreeStyle;
    // sideFourStyle;
    // sideFiveStyle;
    // sideSixStyle;

    componentDidMount(){
        let top;
        let config = { attributes: true };
        SizeManager.OneStyle.subscribe(e=>{
            this.setState({
              sideOneStyle:SizeManager.setStyleSideOne(e),
              sideTwoStyle: SizeManager.setStyleSideTwo(e),
              sideFourStyle: SizeManager.setStyleSideFour(e),
              sideFiveStyle: SizeManager.setStyleSideFive(e),
              sideSixStyle: SizeManager.setStyleSideSix(e),
              sideThreeStyle: SizeManager.setStyleSideThree(e)
            })
            new MutationObserver(mutations => {
                console.log(mutations)
                top = mutations[0].target
                top = top.offsetTop
                this.setState({
                })
            }).observe(document.getElementById('side3'), config);
        })

        this.mousedown$ = fromEvent(document.getElementById('book'), 'mousedown');
    this.mouseup$ = fromEvent(document.getElementById('book'), 'mouseup');
    this.mouseup$.subscribe(_ => {
      this.register();
    })
    this.mousedown$.subscribe(e=> {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    this.register();
    }
    render() {
        return (
            <div className="book_wrapper">
                <div id="wrapper">
                    <div id="book">
                        <div className="side" id="side1" style={this.state.sideOneStyle}>1</div>
                        <div className="side" id="side2" style={this.state.sideTwoStyle}>2</div>
                        <div className="side" id="side3" style={this.state.sideThreeStyle}>3</div>
                        <div className="side" id="side4" style={this.state.sideFourStyle}>4</div>
                        <div className="side" id="side5" style={this.state.sideFiveStyle}>5</div>
                        <div className="side" id="side6" style={this.state.sideSixStyle}>6</div>
                    </div>
                </div>
            </div>
        )
    }

    register() {
        try {
          if(this.sub){
            this.sub.unsubscribe();
          }
        } catch (err) {
            console.log(err)
        }finally{}
    
        let mousemove$ = fromEvent(document.getElementById('book'), 'mousemove');
        mousemove$ = mousemove$.pipe(skipUntil(this.mousedown$));
        mousemove$ = mousemove$.pipe(takeUntil(this.mouseup$));
        this.sub = mousemove$.subscribe((e) => {
          this.rotateAngle.transform = `rotateX(-${this.positionY+ ((e.clientY - this.mouseY)*0.7)}deg) rotateY(${this.positionX+ ((e.clientX - this.mouseX)*0.7)}deg)`
          document.getElementById("book").style.transform = this.rotateAngle.transform
        })
      }
}