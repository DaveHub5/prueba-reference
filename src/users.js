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
    ReferenceField,
    ReferenceInput,
    SelectInput,
    DisabledInput,
    SimpleForm,
    TextInput,
} from 'react-admin';


export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="PostId" source="postId" reference="posts">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="body" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);


export const UserShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="postId" />
            <TextField source="id" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);


export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="PostId" source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);


const UserTitle = ({ record }) => {
    return <span>Post {record ? `"${record.id}"` : ''}</span>;
};

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
             <ReferenceInput label="PostId" source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="body" />

        </SimpleForm>
    </Edit>
);



