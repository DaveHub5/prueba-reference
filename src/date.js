import React from 'react';
import {DateInput} from 'react-admin';


class MilisDate extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {actualDate: "No Date", sec: 0};
  }

  //record to input
  dateFormatter = v => {
  // v is a milis Int
  if (isNaN(v)) return;
  const dateMilis = new Date(v * 1000);
  const pad = '00';
  const yy = dateMilis.getFullYear().toString();
  const mm = (dateMilis.getMonth() + 1).toString();
  const dd = dateMilis.getDate().toString();
  return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
}
  //input to record
  dateParser = v => {
  // v is a string of "YYYY-MM-DD" format
  const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
  if (match === null) return;
  const milis = Math.floor(new Date(match[1], parseInt(match[2], 10) - 1, match[3]) / 1000)
  if (isNaN(milis)) return;
  return milis;
}

  render() {
    return (
		<DateInput source={this.props.source} format={this.dateFormatter} parse={this.dateParser}
		/>
    );
  }
}

export default (MilisDate);

