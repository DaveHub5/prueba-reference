import React from 'react'
import { SimpleForm, TextField, TextInput } from 'react-admin';


const UserList = props => (
        <SimpleForm>
            <TextInput source="id" />
            <TextField source="id" />
        </SimpleForm>
);

export const Reduxp = props => (

	<UserList/>

);
