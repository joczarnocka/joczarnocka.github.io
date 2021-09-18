import React, {Component} from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
//import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1
        };

    }

    changeValue = (action) => {
        // this.setState({
        //     counterValue: this.state.counterValue + 1
        // });
        //console.log(action);

        this.setState( (prevState, prevPropos) => {
            
            let currentCounterValue = prevState.counterValue;
            if (action === 'add') {
                currentCounterValue += parseInt(prevState.stepValue);
    
            } else if (action === 'reinit'){
                currentCounterValue = prevPropos.initValue;
            } else {
                currentCounterValue = 0;
            }
            
            return ({
                counterValue: currentCounterValue
            });

        //console.log('click');
    });
 }

   stepMethod = (step) => {
       this.setState({stepValue: step});
   }


    toggleClock = () => {
        this.setState((prevState)=>{
            return {
                showClock: !prevState.showClock
            }
        })
    }

    render() {
       // let randonMumber = Math.floor(Math.random() * (108-1+1)+1)
       let clockElement = '';
       if (this.state.showClock){
           //clockElement = <Clock 
           //toggleClockMethod = {this.toggleClock} />
           clockElement = <ClockFunctional 
           toggleClockMethod = {this.toggleClock} />
       } else {
           clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>
       }
        return (
            <div className="counter">

                Counter: 
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step stepValue={this.state.stepValue} stepMethod={this.stepMethod} />
                {clockElement}
            </div> 
            );  
 
   }
}

// function Counter(props){
//     return (
//         <div className="counter">
//             Counter: <span className="value">
//             {props.initValue}
//             </span>
//         </div>   
//     );
// }

export default Counter;