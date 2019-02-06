import React from 'react'
import { List, Datagrid, TextField } from 'react-admin';


const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const Reduxp = props => (

	<UserList/>

);
