import React, {Fragment} from 'react';
import { SimpleForm, ReferenceInput, 
AutocompleteInput, FormDataConsumer,
REDUX_FORM_NAME,
 } from 'react-admin'
import {change} from 'redux-form';




class PostCommentsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {

    this.setState(
	{value: event}
	);
	//console.log("Event: " +event);
	//console.log("State: " +this.state.value);
  }




  render() {     
    return (
        <SimpleForm>
            <FormDataConsumer>
                {({ formData, dispatch, ...rest }) => (
                    <Fragment>
			<ReferenceInput label="Posts" source="id" reference="posts" perPage={10} 
     sort={{ field: 'id', order: 'ASC' }}
			           onChange={value => {dispatch(change(REDUX_FORM_NAME, 'postId', null))
							}
						} 
					isLoading={ (formData.id !== this.state.value) && this.handleChange(formData.id)}
					{...rest}>
  			  <AutocompleteInput optionText="title" />
			</ReferenceInput>


			<ReferenceInput label="comments" source="postId" reference="comments" filter={{ postId: this.state.value }}      sort={{ field: 'id', order: 'ASC' }}
>
    			  <AutocompleteInput optionText="body"/>
			</ReferenceInput>
                    </Fragment>
                )}

            </FormDataConsumer>
        </SimpleForm>
    );
  }
}



export const PostsComentarios = props => (
<div>
	<PostCommentsClass/>
</div>
)






