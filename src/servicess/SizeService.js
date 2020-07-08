import { BehaviorSubject } from 'rxjs';
import Constants from './../constants';

const sizeCollection = {
  x: Constants.DEFAULT_BOOK_HEIGHT,
  y: Constants.DEFAULT_BOOK_WIDTH,
  z: Constants.DEFAULT_BOOK_DEPTH,
}


let OneStyle = new BehaviorSubject(sizeCollection);
OneStyle.asObservable();
function nextMessage(data) {
  OneStyle.next(data)
}
function findCoefficient(x,y){
  return Number(y)/Number(x)
}
function changeSide(){
  nextMessage(sizeCollection)
  return OneStyle
}
function bookSize(style){
  let  element = {
    height:`${Constants.DEFAULT_BOOK_HEIGHT}px`,
    width: `${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)}px`,
  }
  return element
}
function setStyleSideOne(style){
  let  element = {
    width: `${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)}px`,
    transform: `translate3d(${style.z/2}px, 0px, ${style.z/2}px)`
  }
  return element
}
function setStyleSideTwo(style){
  let  element = {
    "margin-top": "-50%",
    height:`${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)}px`,
    width: `${style.z}px`,
    transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)/2}px, 0px)`
  }
  return element
}
function setStyleSideThree(style, top){
  let marg = Constants.DEFAULT_BOOK_HEIGHT + top
  let  element = {
    height:`${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)}px`,
    width: `${style.z}px`,
    transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)/2}px, -${marg}px)`
  }
  return element
}
function setStyleSideFour(style){
  let  element = {
    height:`${Constants.DEFAULT_BOOK_HEIGHT}px`,
    width: `${style.z}px`,
    transform: `rotateY(90deg) translate3d(0px, 0px, ${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)}px)`
  }
  return element
}
function setStyleSideFive(style){
  let  element = {
    height: `${Constants.DEFAULT_BOOK_HEIGHT}px`,
    width: `${style.z}px`,
  }
  return element
}
function setStyleSideSix(style){
  let  element = {
    width: `${Constants.DEFAULT_BOOK_HEIGHT * findCoefficient(style.x, style.y)}px`,
    transform: `rotateY(180deg) translate3d(-${style.z/2}px, 0px, ${style.z/2}px)`
  }
  return element
}


export default {sizeCollection, OneStyle, changeSide, setStyleSideOne, setStyleSideSix, setStyleSideFive, setStyleSideFour, setStyleSideThree, setStyleSideTwo}