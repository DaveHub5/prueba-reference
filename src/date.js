import React from 'react';
import { SimpleForm, DateField,
 } from 'react-admin';

import { DateInput, TimeInput, DateTimeInput } from 'react-admin-date-inputs';

  class NewDate extends React.Component{
   
   constructor(props) { 
    super(props);
    this.state = {date: new Date('2017-04-23')};  
    this.handleDate = this.handleDate.bind(this); 
  }
handleDate(){
    this.setState({
      date: new Date()
    });
}


render(){
return(
<SimpleForm>
       <DateField label="Publication date" source={this.state.date} />
	<DateInput source="startDate" />
	<DateTimeInput source="published_at" />
<h1> HH </h1>

        <DateInput source="startDate" label="Start date" options={{ format: 'dd/MM/yyyy'}} />
        <TimeInput source="startTime" label="Start time" options={{ format: 'HH:mm:ss' }} />
        <DateTimeInput source="endDate" label="End time" options={{ format: 'dd/MM/yyyy, HH:mm:ss', ampm: false, clearable: true }} />

</SimpleForm>

)
}


}//end of class

export const Date = props => (
	<NewDate />
	)