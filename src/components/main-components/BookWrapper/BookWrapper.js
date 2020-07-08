import React from 'react';
import './BookWrapper.css';
import SizeManager from './../../../servicess/SizeService';

import { fromEvent } from 'rxjs';
import { skipUntil, takeUntil } from 'rxjs/operators';

export default class BookWrapper extends React.Component {
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

    sideOneStyle;
    sideTwoStyle;
    sideThreeStyle;
    sideFourStyle;
    sideFiveStyle;
    sideSixStyle;

    componentDidMount(){
        let top;
        let config = { attributes: true };
        SizeManager.OneStyle.subscribe(e=>{
            this.sideOneStyle = SizeManager.setStyleSideOne(e)
            this.sideTwoStyle  = SizeManager.setStyleSideTwo(e)
            this.sideFourStyle = SizeManager.setStyleSideFour(e)
            this.sideFiveStyle = SizeManager.setStyleSideFive(e)
            this.sideSixStyle = SizeManager.setStyleSideSix(e)
            new MutationObserver(mutations => {
                console.log(mutations)
                top = mutations[0].target
                top = top.offsetTop
                this.sideThreeStyle = SizeManager.setStyleSideThree(e, top)
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
            <div className="book_wrapper" onClick={()=>{console.log(this.sideOneStyle)}}>
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
          this.rotateAngle.transform = `rotateX(-${this.positionY+ (e.clientY - this.mouseY)}deg) rotateY(${this.positionX+ (e.clientX - this.mouseX)}deg)`
          document.getElementById("book").style.transform = this.rotateAngle.transform
        })
      }
}