import React from 'react';
import { List, SimpleForm, ReferenceInput, SelectInput,
Datagrid, TextField, ReferenceField, EditButton,
AutocompleteInput, required, FormDataConsumer, TextInput
 } from 'react-admin';


  class Data extends React.Component{
   
   constructor(props) { 
    super(props);
    this.posts = this.props.posts;
    this.comments = this.props.comments;
    this.id = this.posts.length;
     
  }
    

  render() {
    return (
      <div>
        <h1>{this.posts}</h1>
        <h2>{this.id}</h2>
        <h4>{this.comments}</h4>
      </div>
    );
  }   
  }  
  const posts = ["Hi", "prueba"];
  const comments = ["Bye", "prueba"];
export const Formp = props => (
<SimpleForm>
	<Data posts="posts" comments={comments}/>
</SimpleForm>
);
