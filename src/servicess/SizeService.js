import { BehaviorSubject } from 'rxjs';

const sizeCollection = {
    x:0,
    y:0,
    z:0
}


let OneStyle = new BehaviorSubject(sizeCollection);
let sideOneStyle = OneStyle.asObservable();
function nextMessage(data) {
  OneStyle.next(data)
}
function findCoefficient(x,y){
  return y/x
}
function changeSide(){
  nextMessage(sizeCollection)
  return OneStyle
}
// bookSize(style){
//   let  element = {
//     height:`${300}px`,
//     width: `${300 * findCoefficient(style.x, style.y)}px`,
//   }
//   return element
// }
function setStyleSideOne(style){
  let  element = {
    width: `${300 * findCoefficient(style.x, style.y)}px`,
    transform: `translate3d(${style.z/2}px, 0px, ${style.z/2}px)`
  }
  return element
}
function setStyleSideTwo(style){
  let  element = {
    "margin-top": "-50%",
    height:`${300 * findCoefficient(style.x, style.y)}px`,
    width: `${style.z}px`,
    transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${300 * findCoefficient(style.x, style.y)/2}px, 0px)`
  }
  return element
}
function setStyleSideThree(style, top){
  let marg = 300 + top
  let  element = {
    height:`${300 * findCoefficient(style.x, style.y)}px`,
    width: `${style.z}px`,
    transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${300 * findCoefficient(style.x, style.y)/2}px, -${marg}px)`
  }
  return element
}
function setStyleSideFour(style){
  let  element = {
    height:`${300}px`,
    width: `${style.z}px`,
    transform: `rotateY(90deg) translate3d(0px, 0px, ${300 * findCoefficient(style.x, style.y)}px)`
  }
  return element
}
function setStyleSideFive(style){
  let  element = {
    height: `${300}px`,
    width: `${style.z}px`,
  }
  return element
}
function setStyleSideSix(style){
  let  element = {
    width: `${300 * findCoefficient(style.x, style.y)}px`,
    transform: `rotateY(180deg) translate3d(-${style.z/2}px, 0px, ${style.z/2}px)`
  }
  return element
}


export default {sizeCollection, OneStyle, changeSide, setStyleSideOne, setStyleSideSix, setStyleSideFive, setStyleSideFour, setStyleSideThree, setStyleSideTwo}