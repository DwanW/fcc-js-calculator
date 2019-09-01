import React from 'react';
import Buttons from './components/Buttons';
import 'typeface-roboto';
import {Card,CardContent,AppBar} from '@material-ui/core';

const isEndWithOperator = /[/*+-]$/;
const isStartWithOperator=/^[/*]/;
const isContainDecimal=/[.]/;

class App extends React.Component {
  constructor(props){
    super(props);
  this.state={
    expression:'0',
    result:'',
    number:'0',
    previousResult:'',
    lastInput:false
  }
  this.handleInitialize=this.handleInitialize.bind(this);
  this.handleEvaluate=this.handleEvaluate.bind(this);
  this.handleOperator=this.handleOperator.bind(this);
  this.handleDigit=this.handleDigit.bind(this);
  this.handleDecimal=this.handleDecimal.bind(this);
  }
  handleInitialize(){
    this.setState({
      expression:'0',
      result:'',
      number:'0',
      previousResult:'',
      lastInput:false
    })
  };

  handleEvaluate(){
    if (isStartWithOperator.test(this.state.expression)){
      this.setState({expression: this.state.expression.slice(1)});
    }

    else if (isEndWithOperator.test(this.state.expression)){
      this.setState({expression: this.state.expression.slice(0,-1)})
    }

    const answer = Math.round(eval(this.state.expression)*1000000000000)/1000000000000;
    this.setState({expression:this.state.expression+ '=' +answer, previousResult:answer.toString(), lastInput:true});
  };
  
  handleOperator(event){
    if (this.state.lastInput){
      this.setState({expression: this.state.previousResult.concat(event.currentTarget.value), number:'', result:'', lastInput:false});
    }
    else{
      if (isEndWithOperator.test(this.state.expression)){
        this.setState({expression: this.state.expression.slice(0,-1).concat(event.currentTarget.value), number:''});
      }
      else{
        this.setState({expression: this.state.expression.concat(event.currentTarget.value), number:''});
      }
    }
  };

  handleDigit(event){
    if (this.state.lastInput){
      this.setState({number:event.currentTarget.value, expression:event.currentTarget.value, result:'', lastInput:false});
    }
    else {
      if (this.state.number==='0' && event.currentTarget.value ==='0'){
        this.setState({expression: this.state.expression})
      }
      else if(this.state.number==='0' && (/[1-9]/).test(event.currentTarget.value)){
      this.setState({number: event.currentTarget.value, expression: this.state.expression.slice(0,-1).concat(event.currentTarget.value)})
      } 
      else {
      this.setState({number: this.state.number.concat(event.currentTarget.value), expression: this.state.expression.concat(event.currentTarget.value)})
      }
    }
  };

  handleDecimal(event){
    if (this.state.lastInput){
      this.setState({number: event.currentTarget.value, expression: event.currentTarget.value, result:'', lastInput:false})
    }
    else {
      if(!isContainDecimal.test(this.state.number)){
      this.setState({number: this.state.number.concat(event.currentTarget.value), expression: this.state.expression.concat(event.currentTarget.value)})
      }
    }
  };

  render(){
    return (
    <Card className="App" style={{margin:'10vh 30vw 10vh 30vw'}}>
      <CardContent>
        <h2 style={{margin:'auto', textAlign:'center'}}>JS Calculator</h2>
      <div id='display' style={{backgroundColor:'#DDD', margin:'10px auto 10px auto', fontSize:'24px', border:'solid 1px black', width:'60%', textAlign:'right'}}>
      {this.state.expression}
      </div>
      <Buttons 
        initialize={this.handleInitialize}
        evaluate={this.handleEvaluate}
        operator={this.handleOperator}
        digit={this.handleDigit}
        decimal={this.handleDecimal}
      />
      </CardContent>
    </Card>
    );
  }
}

export default App;
