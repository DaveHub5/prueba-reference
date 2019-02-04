import React from 'react';
import { List, SimpleForm, ReferenceInput, SelectInput,
Datagrid, TextField, ReferenceField, EditButton,
AutocompleteInput, required, FormDataConsumer,
ReferenceArrayInput, SelectArrayInput, Show,
 } from 'react-admin';




export const Prueba = props => (


<SimpleForm>
<ReferenceInput label="Posts" source="postId" reference="posts">
    <AutocompleteInput optionText="id"/>
</ReferenceInput>

<FormDataConsumer>
   {({ formData, ...rest }) =>
	<ReferenceInput label="Comments" source="id" reference="comments" filter={{ postId: formData.postId }}>
    		<AutocompleteInput optionText="body"/>
	</ReferenceInput>
   }
</FormDataConsumer>

</SimpleForm>

	)


