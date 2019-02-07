import React from 'react';
import { TimeInput } from 'react-admin-date-inputs';
import { SimpleForm, TextInput} from 'react-admin';

class Clock extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {date: new Date(), outro: "PriM"};
    this.cambio = this.cambio.bind(this);
    this.cambioTexto = this.cambioTexto.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
/*
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tock(),
      1000
    );
  }
*/
  componentWillUnmount() {
    clearInterval(this.timerID);
  }  

  tick() {
    this.setState({
      date: new Date()
    });
  }
  tock(){
    this.setState({
      date: this.state.date
    });
  }
  handleDateChange = date => {
    this.setState({ date: date });
  };

  cambio(event) {
    this.setState({
      date: new Date(event.date)
    });
    this.setState({
      outro: event.date
    });
  }

   cambioTexto(event) {
    this.setState({
      outro: event.target.value
    });
  } 
   handleChange(event) {
    this.setState({
      outro: event.target
    });
  } 
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>It is {this.state.outro}.</h2>
	 <SimpleForm>
        <TimeInput source="timesource" label="Start time" options={{ format: 'HH:mm:ss' }} onChange={this.handleDateChange}/>
        <TextInput source="title" onChange={this.cambioTexto}/>
	 </SimpleForm>
      </div>
    );
  }
}




export const Prueba = props => (
<div>
<Clock/>
</div>
)


