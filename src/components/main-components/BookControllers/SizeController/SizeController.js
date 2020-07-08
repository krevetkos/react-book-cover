import React from 'react';
import './SizeController.css';
import SizeManager from './../../../../servicess/SizeService';
export default class SizeController extends React.Component{

    manageSize(event){
        SizeManager.sizeCollection.x = Number(event.target.value)
        SizeManager.changeSide()
    }

    render(){
        return (
            <div className="size_controller">
                <h3 className="size_controller_header">Size controller</h3>
                <div className="size_controller_wrapper">
                    <div className="size_controller_container">
                        <label htmlFor="side_x">X :</label>
                        <input type="number" name="side_x" className="side_controller_input side_x" onInput={this.manageSize}/>
                    </div>
                    <div className="size_controller_container">
                        <label htmlFor="side_y">Y :</label>
                        <input type="number" name="side_y" className="side_controller_input side_y" onInput={this.manageSize}/>
                    </div>
                    <div className="size_controller_container">
                        <label htmlFor="side_z">Z :</label>
                        <input type="number" name="side_z" className="side_controller_input side_z" onInput={this.manageSize}/>
                    </div>
                </div>
            </div>
        )
    }
} 
