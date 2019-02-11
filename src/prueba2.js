import React from 'react';
import { SimpleForm, DateInput, DateTimeInput} from 'react-admin';

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


const dateTimeFormatter = v => {
  // v is a `Date` object
  if (!(v instanceof Date) || isNaN(v)) return;
  const pad = '00';
  const yy = v.getFullYear().toString();
  const mm = (v.getMonth() + 1).toString();
  const dd = v.getDate().toString();
  const hh = v.getHours().toString();
  const mmm = v.getMinutes().toString();
  return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}_${(pad + hh).slice(-2)}:${(pad + mmm).slice(-2)}`;
}


const dateTimeParser = v => {
  // v is a string of "YYYY-MM-DD_hh:mm" format
  const match = /(\d{4})-(\d{2})-(\d{2})_(\d{2}):(\d{2})/.exec(v);
  if (match === null) return;
  const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3], match[4],match[5]);
  if (isNaN(d)) return;
  return d;
}
class Clock extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {actualDate: "No Time", sec: 0};
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
  }
  

  handleDateChange(date) {
    this.setState({
      actualDate: date[0] +date[1] +date[2] +date[3]+date[4] +date[5] +date[6] +date[7]+date[8] +date[9]
    });

    const yy = date[0] + date[1] +date[2] +date[3]
    const mm = date[5] +date[6]
    const dd = date[8] +date[9]
    const aux = Math.floor(new Date(yy, parseInt(mm, 10) - 1, dd) / 1000)
    this.setState({
      sec: aux
    });
  }

  handleDateTimeChange(date) {

	//Parse
    const match = /(\d{4})-(\d{2})-(\d{2})_(\d{2}):(\d{2})/.exec(date.target.value);
    if (match === null) return;
    const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3], match[4],match[5]);
    if (isNaN(d)) return;


	//Format
	//Reformatting is needed to avoid 2019-02-09_150:00.  (Bad minutes formatting)
    const newDate = dateTimeFormatter(d);


    this.setState({
      //actualDate: date.target.value
	actualDate: newDate
    });



    const aux = Math.floor(d / 1000)
    this.setState({
      sec: aux
    });
  }

  render() {
    return (
      <div>
        <h2>Time in milliseconds: {this.state.sec}.</h2>
        <h2>Time: {this.state.actualDate}.</h2>
		<SimpleForm>
			<DateInput  format={dateFormatter} parse={dateParser}
 onChange={this.handleDateChange}
		/>
			<DateTimeInput format={dateTimeFormatter} parse={dateTimeParser}
 onChange={this.handleDateTimeChange}
		/>
		</SimpleForm>
      </div>


    );
  }
}









export const Prueba2 = props => (
	<Clock/>


)