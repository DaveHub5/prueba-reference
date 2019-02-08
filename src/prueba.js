import React from 'react';
import { SimpleForm} from 'react-admin';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Clock extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {actualDate: new Date(), sec: Math.floor(Date.now() / 1000)};
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.setState({
      sec: Math.floor(date / 1000)
    });
  }
  render() {
    return (
      <div>
        <h2>Time in milliseconds {this.state.sec}.</h2>
	 <SimpleForm>


		<DatePicker
			selected={this.state.actualDate}
			onChange={this.handleChange}
			readOnly={true}
			placeholderText="This is readOnly" 
		/>


		<DatePicker
			selected={this.state.actualDate}
			onChange={this.handleChange}
			showTimeSelect
			timeFormat="HH:mm"
			dateFormat="MMMM d, yyyy h:mm aa"
			readOnly={true}

		/>

      		<DatePicker
        		selected={this.state.actualDate}
        		onChange={this.handleChange}
      		/>

		<DatePicker
			selected={this.state.actualDate}
			onChange={this.handleChange}
			showTimeSelect
			timeFormat="HH:mm"
			timeIntervals={1}
			dateFormat="MMMM d, yyyy h:mm aa"
			timeCaption="time"
		/>


	 </SimpleForm>
      </div>


    );
  }
}




export const Prueba = props => (

	<Clock/>

)


