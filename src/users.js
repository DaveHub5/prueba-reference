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


export const CommentList = (props) => (
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


export const CommentShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="postId" />
            <TextField source="id" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);


export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="PostId" source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="body" />
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
             <ReferenceInput label="PostId" source="postId" reference="posts">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="body" />

        </SimpleForm>
    </Edit>
);



