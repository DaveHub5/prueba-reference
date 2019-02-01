import React from 'react';
import { List, SimpleForm, ReferenceInput, SelectInput,
Datagrid, TextField, ReferenceField, EditButton,
AutocompleteInput, required, FormDataConsumer,
ReferenceArrayInput, SelectArrayInput, Show, DateField, 
 } from 'react-admin';

import { DateInput, TimeInput, DateTimeInput } from 'react-admin-date-inputs';


export const Date = props => (


<SimpleForm>
        <DateField label="Publication date" source="startDate" />
	<DateInput source="startDate" />
	<DateTimeInput source="published_at" />
<h1> HH </h1>

        <DateInput source="startDate" label="Start date" options={{ format: 'dd/MM/yyyy',  
awareOfUnicodeTokens: true,   useAdditionalDayOfYearTokens: true, useAdditionalWeekYearTokens: true 
}} />
        <TimeInput source="startTime" label="Start time" options={{ format: 'HH:mm:ss' }} />
        <DateTimeInput source="endDate" label="End time" options={{ format: 'dd/MM/yyyy, HH:mm:ss', ampm: false, clearable: true }} />


</SimpleForm>

	)