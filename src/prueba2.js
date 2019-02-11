import React from 'react';
import { SimpleForm, DateInput} from 'react-admin';

const dateFormatter = v => {
  // v is a `Date` object
  if (!(v instanceof Date) || isNaN(v)) return;
  const pad = '00';
  const yy = v.getFullYear().toString();
  const mm = (v.getMonth() + 1).toString();
  const dd = v.getDate().toString();
  return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
}

const dateParser = v => {
  // v is a string of "YYYY-MM-DD" format
  const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
  if (match === null) return;
  const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
  if (isNaN(d)) return;
  return d;
}

class Clock extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {actualDate: new Date(), numb: 0};
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <h2>Time in milliseconds {this.state.startDate}.</h2>
        <h2>Time in number {this.state.numb}.</h2>
		<SimpleForm>
			<DateInput source={this.state.startDate} format={dateFormatter} parse={dateParser} 
		/>
		</SimpleForm>
      </div>


    );
  }
}









export const Prueba2 = props => (
	<Clock/>


)
