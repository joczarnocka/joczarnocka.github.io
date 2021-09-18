import React, {Component} from 'react';
import './Step.css';


class Step extends Component {

    constructor(props) {
        super(props);
        this.state = {step: props.stepValue};
        console.log('INIT step=' + this.step );
       // this._inputStep = 1;
    }

    componentDidMount(){
        
       // this.timerID = setInterval(()=> {this.tick()}, 1000)
        console.log('Mounting lifecycle: did mount');

    }

    componentDidUpdate(){
        console.log('Updation lifecycle: did update');
    }

    componentWillUnmount(){
       // clearInterval(this.timerID);
        console.log('Unmounting lifecycle: will unmount');      
    }

    updateStep = () => {
        let _step = this._inputStep.value;
        this.setState({step: _step});
        this.props.stepMethod( _step);
    }

    render(){
        return (
            //onChange={this.updateStep}
            <div id="step">
            <label htmlFor="stepInput">Krok: </label>
            <input id="stepInput" ref={(data) => { this._inputStep = data} }  onChange={this.updateStep} type="number" value={this.state.step} />
            </div>
        )
    }

}

export default Step;