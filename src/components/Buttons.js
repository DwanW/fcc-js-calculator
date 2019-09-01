import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const buttonStyle = {
    fontSize:'20px'
}
class Buttons extends React.Component {
 render(){
    return(
    
    <Grid justify='center' alignItems='center' spacing={3} style={{
        border:'solid 1px gray',
        width:'60%',
        margin:'auto',
        gridTemplateColumn:'1fr 1fr 1fr',
        alignItems: 'center'
        }}container>
        <Grid item>
        <Button style={{backgroundColor:'red', color:'white', fontSize:'20px'}}
        className='reset' id='clear' onClick={this.props.initialize} value='AC'>AC</Button></Grid>

        <Grid item><Button style={buttonStyle} id='divide' onClick={this.props.operator} value='/'>/</Button></Grid>

        <Grid item><Button style={buttonStyle} id='multiply' onClick={this.props.operator} value='*'>*</Button></Grid>
        <Grid item><Button style={buttonStyle}  id='subtract' onClick={this.props.operator} value='-'>-</Button></Grid>

        <Grid item><Button style={buttonStyle} id='seven' onClick={this.props.digit} value='7'>7</Button></Grid>
        <Grid item><Button style={buttonStyle} id='eight' onClick={this.props.digit} value='8'>8</Button></Grid>
        <Grid item><Button style={buttonStyle} id='nine' onClick={this.props.digit} value='9'>9</Button></Grid>
        <Grid item><Button style={buttonStyle} id='add' onClick={this.props.operator} value='+'>+</Button></Grid>


        <Grid item><Button style={buttonStyle} id='four' onClick={this.props.digit} value='4'>4</Button></Grid>
        <Grid item><Button style={buttonStyle} id='five' onClick={this.props.digit} value='5'>5</Button></Grid>
        <Grid item><Button style={buttonStyle} id='six' onClick={this.props.digit} value='6'>6</Button></Grid>

        <Grid item><Button style={buttonStyle} id='decimal' onClick={this.props.decimal} value='.'>.</Button></Grid>
        <Grid item><Button style={buttonStyle} id='one' onClick={this.props.digit} value='1'>1</Button></Grid>
        <Grid item><Button style={buttonStyle} id='two' onClick={this.props.digit} value='2'>2</Button></Grid>
        <Grid item><Button style={buttonStyle} id='three' onClick={this.props.digit} value='3'>3</Button></Grid>
        <Grid item><Button style={buttonStyle} id='zero' onClick={this.props.digit} value='0'>0</Button></Grid>

        <Grid item><Button style={{backgroundColor:'blue', color:'white', fontSize:'20px'}} id="equals" onClick={this.props.evaluate} value="=">=</Button></Grid>
                
    </Grid>
    );
 }
}

export default Buttons;