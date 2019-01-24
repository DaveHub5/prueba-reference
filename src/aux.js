import React from 'react';
import { List, SimpleForm, ReferenceInput, SelectInput,
Datagrid, TextField, ReferenceField, EditButton,
AutocompleteInput, required, FormDataConsumer,
ReferenceArrayInput, SelectArrayInput,
 } from 'react-admin';


const optionRenderer = choice => `"$posts.id" $"posts.body"`;



export const Aux = props => (
<SimpleForm>
<ReferenceInput label="Post" source="postId" reference="posts">
    <AutocompleteInput optionText="id"/>
</ReferenceInput>
	<ReferenceInput label="Aux" source="postId" reference="comments">
    		<AutocompleteInput optionText="id" />
	</ReferenceInput>

</SimpleForm>
);
