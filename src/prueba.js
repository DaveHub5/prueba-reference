import React from 'react';
import { SimpleForm, ReferenceInput, 
AutocompleteInput, FormDataConsumer,
 } from 'react-admin';




export const Prueba = props => (


<SimpleForm>
<ReferenceInput label="Posts" source="postId" reference="posts">
    <AutocompleteInput optionText="title"/>
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


