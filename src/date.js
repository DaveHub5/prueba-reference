import React from 'react';
import { SimpleForm, DateInput, DateTimeInput} from 'react-admin';




class Date extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {actualDate: "No Date", sec: 0};
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  dateFormatter = v => {
  // v is a `Date` object
  if (!(v instanceof Date) || isNaN(v)) return;
  const pad = '00';
  const yy = v.getFullYear().toString();
  const mm = (v.getMonth() + 1).toString();
  const dd = v.getDate().toString();
  return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
}

  dateParser = v => {
  // v is a string of "YYYY-MM-DD" format
  const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
  if (match === null) return;
  const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
  if (isNaN(d)) return;
  return d;
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

  render() {
    return (
      <div>
        <h2>Time in milliseconds: {this.state.sec}.</h2>
		<DateInput source="date" format={this.dateFormatter} parse={this.dateParser}
 onChange={this.handleDateChange}
		/>
	</div>

    );
  }
}


export default (Date);

