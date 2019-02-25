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
    TextInput,
    NumberInput,
    Filter,
    DateInput,
} from 'react-admin';

import Date from './date';

const PostFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput source="id" /> 
  </Filter>
);

export const PostList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="aux" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="aux" />
		{<Date source="prov"/>}
        </SimpleForm>
    </Create>
);


const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="aux" />
        </SimpleForm>
    </Edit>
);



export const PostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="aux" />
        </SimpleShowLayout>
    </Show>
);