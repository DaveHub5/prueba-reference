import React, {Fragment} from 'react';
import { SimpleForm, ReferenceInput, 
AutocompleteInput, FormDataConsumer,
REDUX_FORM_NAME,
 } from 'react-admin'
import {change} from 'redux-form';



export const Prueba2 = props => (

        <SimpleForm>
            <FormDataConsumer>
                {({ formData, dispatch, getSource, ...rest }) => (
                    <Fragment>
			<ReferenceInput label="Posts" source="id" reference="posts" perPage={10} 
     sort={{ field: 'id', order: 'ASC' }}
			           onChange={value => dispatch(change(REDUX_FORM_NAME, 'postId', null))}{...rest}>
  			  <AutocompleteInput optionText="title" />
			</ReferenceInput>


			<ReferenceInput label="Comments" source="postId" reference="comments" filter={{ postId: formData.id }}      sort={{ field: 'id', order: 'ASC' }}
>
    				<AutocompleteInput optionText="id"/>
			</ReferenceInput>



                    </Fragment>
                )}

            </FormDataConsumer>
        </SimpleForm>


)