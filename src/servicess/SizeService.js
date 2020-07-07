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
//     height:`${DEFAULT_BOOK_HEIGHT}px`,
//     width: `${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
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
// setStyleSideTwo(style){
//   let  element = {
//     "margin-top": "-50%",
//     height:`${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
//     width: `${style.z}px`,
//     transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)/2}px, 0px)`
//   }
//   return element
// }
// setStyleSideThree(style, top){
//   let marg = DEFAULT_BOOK_HEIGHT + top
//   let  element = {
//     height:`${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
//     width: `${style.z}px`,
//     transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)/2}px, -${marg}px)`
//   }
//   return element
// }
// setStyleSideFour(style){
//   let  element = {
//     height:`${DEFAULT_BOOK_HEIGHT}px`,
//     width: `${style.z}px`,
//     transform: `rotateY(90deg) translate3d(0px, 0px, ${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px)`
//   }
//   return element
// }
// setStyleSideFive(style){
//   let  element = {
//     height: `${DEFAULT_BOOK_HEIGHT}px`,
//     width: `${style.z}px`,
//   }
//   return element
// }
// setStyleSideSix(style){
//   let  element = {
//     width: `${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
//     transform: `rotateY(180deg) translate3d(-${style.z/2}px, 0px, ${style.z/2}px)`
//   }
//   return element
// }


export default {sizeCollection, OneStyle, changeSide}