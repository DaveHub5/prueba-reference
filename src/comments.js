import React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    EditButton,
    DisabledInput,
    SimpleForm,
} from 'react-admin';

import MilisDate from './date';

export const CommentList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="date" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);


export const CommentShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="date" />
        </SimpleShowLayout>
    </Show>
);


export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
		{<MilisDate source="date"/>}
        </SimpleForm>
    </Create>
);


const CommentTitle = ({ record }) => {
    return <span>Post {record ? `"${record.id}"` : ''}</span>;
};

export const CommentEdit = props => (
    <Edit title={<CommentTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
        </SimpleForm>
    </Edit>
);



