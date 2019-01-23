import React from 'react';
import { List, SimpleForm, ReferenceInput, SelectInput,
Datagrid, TextField, ReferenceField, EditButton,
AutocompleteInput, required, FormDataConsumer, TextInput
 } from 'react-admin';

//<TextInput source="id"/>

export const Formp = props => (
<SimpleForm>
    <TextField source="id" reference="posts" />
            <FormDataConsumer>
                {({ formData, ...rest }) =>
                    <TextInput source="title" {...rest} />
                }
            </FormDataConsumer>

</SimpleForm>
);
