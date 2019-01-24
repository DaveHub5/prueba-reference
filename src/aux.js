import React from 'react';
import { List, SimpleForm, ReferenceInput, SelectInput,
Datagrid, TextField, ReferenceField, EditButton,
AutocompleteInput, required, FormDataConsumer,
ReferenceArrayInput, SelectArrayInput,
 } from 'react-admin';


  class Post extends React.Component{
   constructor(props) { 
    super(props);
    this.id = this.props.id;
    this.title = this.props.title;
    this.author = this.props.author;
    this.aux = this.props.aux;
  }
    
    render() {
    return (
      <div>
        <h4>{this.id}  {this.title}  {this.author}  {this.aux}</h4>       
      </div>
    );
  }  
  }
  
  class Comment extends React.Component{
   constructor(props) { 
    super(props);
    this.postId = this.props.postId;
    this.id = this.props.id;
    this.body = this.props.body;
  }
    
    render() {
    return (
      <div>
        <h4>{this.postId} {this.id} {this.body}</h4>       
      </div>
    );
  }  
  } 
  /*
  function DoSomething(){
    return (
      <div>
  <Post id={id} title={title} author={author} aux={aux}/>
  <Comment postId={id} id={commentId} body={body}/>
     </div>);

  }*/
  function Prueba(posts, comments){
   const i = 0;
   const j = 0;
    for (i=0; i<posts.posts.length; i++){
      console.log("DD" + i)
      for (j=0; j<posts.comments.length; j++) {
        if(posts.comments[j].postId == posts.posts[i].id){
       console.log(posts.comments[j].body)     
        }
      }
    }
    
    
    return (
     <div>
 <Post id={posts.posts[1].id} title={posts.posts[1].title} author={posts.posts[1].author} aux={posts.posts[1].aux}/>        
     </div>
    );
  }
  
  
    function PruebaSelect(posts, comments, selected){
      const aux = [];
	var j = 0; 
      for (j=0; j<posts.comments.length; j++) {
        if(posts.comments[j].postId == posts.selected){  
          aux.push(posts.comments[j]);
        }
      }
      console.log(aux)
    return (
    <div>
	Hi
    </div>
    );

  }
  
  const posts = [
    { id: 1, title: "HawkEye", author: "Gorbien", aux: ["a", "b", "c"]},
    { id: 2, title: "HawkEye", author: "Gorbien", aux: ["a", "b", "c"]},
    { id: 3, title: "HawkEye", author: "Gorbien", aux: ["a", "b", "c"]}
                ];
  const comments = [
    { postId: 1, id: 1, body: "YES"},
    { postId: 1, id: 2, body: "YES"},
    { postId: 2, id: 3, body: "NO"}
                ];

export const Aux = props => (
<SimpleForm>
<ReferenceInput label="Post" source="postId" reference="posts">
    <AutocompleteInput optionText="id"/>
</ReferenceInput>
  <PruebaSelect posts="posts" comments="comments" selected={1}/>
<TextField>

</SimpleForm>
);
