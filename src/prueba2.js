import React, {Fragment} from 'react';
import { SimpleForm, ReferenceInput, 
AutocompleteInput, FormDataConsumer,
Edit, SelectInput, REDUX_FORM_NAME,
 } from 'react-admin'
import {change} from 'redux-form';




export const Prueba2 = props => (

        <SimpleForm>
            <FormDataConsumer>
                {({ formData, dispatch, ...rest }) => (
                    <Fragment>
			<ReferenceInput label="Posts" source="postId" reference="posts"
			           onChange={value => dispatch(
                                change(REDUX_FORM_NAME, 'id', null)
                            )}
                             {...rest}
			>
  			  <AutocompleteInput optionText="title" />
			</ReferenceInput>


	<ReferenceInput label="Comments" source="id" reference="comments" filter={{ postId: formData.postId }}>
    		<AutocompleteInput optionText="body"/>
	</ReferenceInput>



                    </Fragment>
                )}

            </FormDataConsumer>
        </SimpleForm>


)